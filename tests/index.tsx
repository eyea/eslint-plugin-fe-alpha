import { Bar } from '@ant-design/plots';

const DemoBar = (props: any) => {
  return <Bar onReady={props.ready} {...props.config} />;
};
export default DemoBar;
