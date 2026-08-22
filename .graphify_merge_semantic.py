import json
from pathlib import Path

all_nodes = []
all_edges = []
all_hyperedges = []

for i in range(1, 8):
    path = Path(f'graphify-out/.graphify_chunk_{i:02d}.json')
    if path.exists():
        try:
            data = json.loads(path.read_text())
            all_nodes.extend(data.get('nodes', []))
            all_edges.extend(data.get('edges', []))
            all_hyperedges.extend(data.get('hyperedges', []))
        except:
            print(f"Chunk {i:02d}: invalid JSON, skipping")
    else:
        print(f"Chunk {i:02d}: missing, skipping")

# Dedupe nodes by id
seen = set()
deduped = []
for n in all_nodes:
    nid = n.get('id', '')
    if nid and nid not in seen:
        seen.add(nid)
        deduped.append(n)

merged = {
    'nodes': deduped,
    'edges': all_edges,
    'hyperedges': all_hyperedges,
    'input_tokens': 0,
    'output_tokens': 0,
}
Path('.graphify_semantic_new.json').write_text(json.dumps(merged, indent=2))
print(f"Semantic: {len(deduped)} nodes, {len(all_edges)} edges, {len(all_hyperedges)} hyperedges")
