#!/usr/bin/env node

// TODO
const fs = require("fs");
const path = require("path");
const { ESLint } = require("eslint");
const LibRulesAndConfigs = require("../lib/index"); // lib定义的规则名称集
const supportFileExtNames = require("../lib/execConfigs/supportFileExtNames"); // 支持的文件类型名后缀集合
const BlackFilesList = require("../lib/execConfigs/BlackFilesList"); // 排除的路径集合

// const BlackFilesListArr = []; // 已排除的目录列表
let targetPath = "";
let type = "";

const filesToLint = [];

const eslintInstances = {};

function generateEslintInstances() {
  const lintnames = Object.keys(LibRulesAndConfigs.configsFilePaths);

  for (const name of lintnames) {
    const pathToConfigFile = require.resolve(`@afuteam/eslint-plugin-fe-alpha/lib/configs/${name}.js`);

    eslintInstances[name] = new ESLint({ overrideConfigFile: pathToConfigFile, useEslintrc: false});
  }

}

const fileGroups = {};
function generateFileGroups() {
  for (let name of supportFileExtNames) {
    fileGroups[name] = [];
  }
}

// 根据文件类型，命令行的type，eslintInstances字典，类确定具体某个文件使用的规则；type优先级最高
function handleSelectWhichEslintInstances(type, eslintInstances) {
  return eslintInstances[type] || "";
}

// TODO lintType 可能是多个，需要支持的，暂时不支持

async function lintFiles(filePaths) {

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const filePath of filePaths) {
    const extName = path.extname(filePath).slice(1);
    if (fileGroups[extName]) {
      fileGroups[extName].push(filePath);
    }
  }

  // 针对每种文件类型执行 Lint 操作
  for (const fileType in fileGroups) {
    if (fileGroups[fileType].length > 0) {
      const whichEslintInstances = handleSelectWhichEslintInstances(
        type,
        eslintInstances
      );

      if (!whichEslintInstances && !whichEslintInstances.lintFiles) {
        console.error(
          `获取eslint规则实例异常，指令type为${type};文件类型为${fileType}`
        );

        return
      }

      const results = await whichEslintInstances.lintFiles(
        fileGroups[fileType]
      );
      const formatter = await whichEslintInstances.loadFormatter("stylish");
      const resultText = formatter.format(results);

      if (resultText) {
        results.forEach(result => {
          totalErrors += result.errorCount;
          totalWarnings += result.warningCount;
        });
        console.error(resultText);
      }
    }
  }

  console.log('Total 排除目录列表:', BlackFilesList);
  console.log('Total 支持文件类型:', supportFileExtNames);

  console.log('Total errors:', totalErrors);
  console.log('Total warnings:', totalWarnings);

}

function walkDir(dir, callback) {
  // 黑名单目录排除
  if(curPathIsBlackDirectory(dir)) return;

  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function handleProcessArgv() {
  // 把 process.argv 转为一个键值对对象
  let argv = {};
  for (let i = 2; i < process.argv.length; i++) {
    let match = process.argv[i].match(/^--([^=]+)=(.+)/);
    if (match) {
      argv[match[1]] = match[2];
    }
  }

  // 检查是否有 --help 参数
  if (argv.help === 'type') {

    console.log('当前支持的type类型: \n', Object.keys(LibRulesAndConfigs.configsFilePaths), '\n');
    console.log('将要废弃、不建议使用: \n', Object.keys(LibRulesAndConfigs.ABANDON_configsFilePaths), '\n');

    process.exit(0);   // 结束程序
  }

  if (argv.path) {
    targetPath = argv.path;
  }
  // TODO type 考虑是否支持组合，默认支持一种
  if (argv.type) {
    type = argv.type;
  }
}

// 检测文件类型是否支持，供后面的lint规则用
function handleValidPathExtName(supportFileExtNames, targetPath) {
  const extname = path.extname(targetPath).slice(1);
  return !!supportFileExtNames.includes(extname);
}

// 路径是 黑名单
function curPathIsBlackDirectory(targetPath) {
  const basename = path.basename(targetPath);

  let isBlackFile = BlackFilesList.includes(basename)
  // if(isBlackFile) {
  //   BlackFilesListArr.push(basename)
  // }
  return isBlackFile
}

// 遍历、执行lint逻辑
function handleExecLintRules() {
  if (fs.lstatSync(targetPath).isDirectory()) {
    // 遍历目录下的所有文件
    walkDir(targetPath, function (filePath) {
      if (handleValidPathExtName(supportFileExtNames, filePath)) {
        filesToLint.push(filePath);
      }
    });
  } else if (handleValidPathExtName(supportFileExtNames, targetPath)) {
    filesToLint.push(targetPath);
  }

  lintFiles(filesToLint).catch((error) => {
    process.exitCode = 1;
    console.error(error);
  });
}

//  main 函数
function main() {

  // process argv参数处理  从命令行参数获取目录路径和 lint 类型
  handleProcessArgv();

  // 生成 ESLint 实例字典
  generateEslintInstances();

  // 生成 fileGroups，根据当前配置支持的 lint类型做的一个集合，后面的单个类型文件放到这里
  generateFileGroups();

  // 遍历、执行 lint 逻辑 输出到控制台
  handleExecLintRules();
}

main();
