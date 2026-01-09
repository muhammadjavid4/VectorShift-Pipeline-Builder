import BaseNode from './baseNode';

export const DelayNode = () => {
  return (
    <BaseNode title="⏱ Delay" inputs={['delay-in']} outputs={true}>
      <div>Delay execution</div>
    </BaseNode>
  );
};
