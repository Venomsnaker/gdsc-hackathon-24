import json

with open("crawler/data/output.json", "r", encoding="utf-8") as file:
    data = json.load(file)
print(data)