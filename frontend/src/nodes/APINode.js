import BaseNode from './baseNode';

export const APINode = () => {
  return (
    <BaseNode title="🌐 API" inputs={['api-in']} outputs={true}>
      <div>Call external API</div>
    </BaseNode>
  );
};
