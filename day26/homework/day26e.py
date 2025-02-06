names = ["tom", "alice", "tina", "john", "ted", "mary", "teo"]
names_starting_with_t = []
for i in names:
    if i[0] == "t":
        names.remove(i)
        names_starting_with_t.append(i)
print(names)
print(names_starting_with_t)




