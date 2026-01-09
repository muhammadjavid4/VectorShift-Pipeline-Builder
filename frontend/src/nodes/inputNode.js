import { useState, useEffect } from 'react';
import BaseNode from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  // 🔹 sync values back to node data
  useEffect(() => {
    if (data) {
      data.inputName = currName;
      data.inputType = inputType;
    }
  }, [currName, inputType]);

  return (
    <BaseNode title="🔌 Input" outputs={true}>
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
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
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
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
