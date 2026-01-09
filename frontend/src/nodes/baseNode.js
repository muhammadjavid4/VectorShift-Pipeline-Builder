import { Handle, Position } from 'reactflow';

export default function BaseNode({
  title,
  children,
  inputs = [],
  outputs = true,
}) {
  return (
    <div
      style={{
        position: 'relative',
        minWidth: 260,
        padding: '14px 14px 14px 32px',
        borderRadius: 10,
        background: '#020617',
        color: '#ffffff',
        border: '1px solid #1e293b',
        fontSize: 13,
      }}
    >
      {/* NODE TITLE */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 8,
          opacity: 0.9,
        }}
      >
        {title}
      </div>

      {/* INPUT HANDLES (LEFT) */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{
            top: 48 + index * 20,
            background: '#38bdf8',
          }}
        />
      ))}

      {/* NODE CONTENT */}
      <div>{children}</div>

      {/* OUTPUT HANDLE (RIGHT) */}
      {outputs && (
        <Handle
          type="source"
          position={Position.Right}
          style={{ background: '#22c55e' }}
        />
      )}
    </div>
  );
}
