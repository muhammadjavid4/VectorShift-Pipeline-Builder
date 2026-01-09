from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------- Models ---------

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# --------- DAG Check ---------

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    graph = {node.id: [] for node in nodes}
    for e in edges:
        if e.source in graph:
            graph[e.source].append(e.target)

    visited = set()
    visiting = set()

    def dfs(n):
        if n in visiting:
            return False
        if n in visited:
            return True
        visiting.add(n)
        for nei in graph.get(n, []):
            if not dfs(nei):
                return False
        visiting.remove(n)
        visited.add(n)
        return True

    return all(dfs(n) for n in graph)

# --------- Endpoint ---------

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges)
    }
