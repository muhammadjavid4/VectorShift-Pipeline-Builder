import BaseNode from './baseNode';

export const MathNode = () => {
  return (
    <BaseNode title="➕ Math" inputs={['math-in']} outputs={true}>
      <div>Add / Subtract values</div>
    </BaseNode>
  );
};
