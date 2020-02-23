import json

with open('./data_towash.json', 'r') as file:
    exams = json.load(file)

for exam in exams:
    del exam['NOTE']
    exam["BUILDING"] = "TBA"
    exam["ROOM"] = "TBA"
    exam["ROW"] = "TBA"
    exam["FROM"] = "AAA"
    exam["TO"] = "ZZZ"

with open("./data_winter2020.json", "w") as file:
    json.dump(exams, file)