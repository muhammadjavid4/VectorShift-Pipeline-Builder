// submit.js

import { useReactFlow } from "reactflow";

export function SubmitButton() {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes: nodes.map((n) => ({ id: n.id })),
            edges: edges.map((e) => ({
              source: e.source,
              target: e.target,
            })),
          }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Summary ✅\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting pipeline");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
