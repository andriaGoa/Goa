list1 = ["george", "ammy", "ana", "nick", "jeff"]
list2 = []
for i in list1:
    if len(i) < 4:
        list2.append(i)
print(list2)