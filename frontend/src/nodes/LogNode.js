import BaseNode from './baseNode';

export const LogNode = () => {
  return (
    <BaseNode title="📄 Log" inputs={['log-in']} outputs={true}>
      <div>Log output</div>
    </BaseNode>
  );
};
