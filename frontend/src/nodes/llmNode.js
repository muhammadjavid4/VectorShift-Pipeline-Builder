import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="🤖 LLM"
      inputs={[
        `${id}-system`,
        `${id}-prompt`,
      ]}
      outputs={true}
    >
      <div style={{ fontSize: 13, opacity: 0.9 }}>
        This is a LLM.
      </div>
    </BaseNode>
  );
};
