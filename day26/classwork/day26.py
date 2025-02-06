list1 = ["Andria", "Jeff", "Jamie", "George", "Nick"]
list2 = ["Andria", "Jeff", "Jamie", "George", "Nick"]
same_name = 0
list3 = list1 + list2
for i in list3:
    if i == "Andria":
        same_name += 1
print(same_name)
print(list3.index("Andria"))