import BaseNode from './baseNode';

export const ConditionNode = () => {
  return (
    <BaseNode title="🔀 Condition" inputs={['cond-in']} outputs={true}>
      <div>If / Else logic</div>
    </BaseNode>
  );
};
