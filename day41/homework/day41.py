# def filter_list(l):
#     list1 =[]
#     for i in l:
#         if type(i) != str:
#             list1.append(i)
#     return list1

# def to_jaden_case(s):
#     s = s.split(" ")
#     l = []
    
#     for i in s:
#         l.append(i.capitalize())
    
#     return " ".join(l)

# def digital_root(n):
#     sum = 0
    
#     n = str(n)
    
#     for i in n:
#         sum += int(i)
#          sum == "15"
#         if sum > 9:
#             sum = int(str(sum)[0]) + int(str(sum)[-1])
#     return sum