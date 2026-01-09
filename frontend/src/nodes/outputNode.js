import { useState, useEffect } from 'react';
import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  // 🔹 sync back to node data
  useEffect(() => {
    if (data) {
      data.outputName = currName;
      data.outputType = outputType;
    }
  }, [currName, outputType]);

  return (
    <BaseNode
      title="📤 Output"
      inputs={[`${id}-value`]}
      outputs={false}
    >
      <div style={{ marginBottom: 8 }}>
        <label style={{ fontSize: 12, opacity: 0.8 }}>Name</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            width: '100%',
            marginTop: 4,
            padding: '6px 8px',
            borderRadius: 6,
            border: '1px solid #334155',
            background: '#020617',
            color: '#fff',
          }}
        />
      </div>

      <div>
        <label style={{ fontSize: 12, opacity: 0.8 }}>Type</label>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={{
            width: '100%',
            marginTop: 4,
            padding: '6px 8px',
            borderRadius: 6,
            border: '1px solid #334155',
            background: '#020617',
            color: '#fff',
          }}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
