import { useState, useEffect, useRef } from 'react';
import BaseNode from './baseNode';

export default function TextNode({ id, data }) {
  const [text, setText] = useState('');
  const [vars, setVars] = useState([]);
  const textareaRef = useRef(null);

  // 🔹 Detect {{variables}}
  useEffect(() => {
    const matches = text.match(/{{\s*[a-zA-Z_]\w*\s*}}/g) || [];
    const clean = matches.map(v =>
      v.replace(/[{}]/g, '').trim()
    );
    setVars(clean);
  }, [text]);

  // 🔹 Auto-grow textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <BaseNode
      title="📝 Text"
      inputs={vars.map(v => `${id}-${v}`)}
      outputs={true}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text here..."
       // key={vars.join('-')}
        style={{
          width: '100%',
          resize: 'none',
          overflow: 'hidden',
          background: '#111827',
          color: 'white',
          border: '1px solid #444',
          borderRadius: 6,
          padding: 8,
          fontSize: 13,
          lineHeight: '1.4',
        }}
      />
    </BaseNode>
  );
}
