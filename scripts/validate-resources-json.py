import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
data = json.loads((root / "data" / "resources.json").read_text(encoding="utf-8"))
ids = {r["id"] for r in data}
missing = []
for r in data:
    for rid in r.get("related_ids", []):
        if rid not in ids:
            missing.append((r["id"], rid))
if missing:
    print("MISSING related_ids:")
    for a, b in missing:
        print(f"  {a} -> {b}")
    raise SystemExit(1)
print(f"OK: {len(data)} resources, all related_ids resolve.")

coll = json.loads((root / "data" / "collections.json").read_text(encoding="utf-8"))
for c in coll:
    for rid in c.get("resource_ids", []):
        if rid not in ids:
            print(f"Collection {c['id']} missing resource: {rid}")
            raise SystemExit(1)
print(f"OK: {len(coll)} collections, all resource_ids resolve.")
