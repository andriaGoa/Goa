def count_sheeps(sheep):
    count = 0
    for i in sheep:
        if i == True:
            count += 1
    return count

def find_multiples(integer, limit):
    list1 = []
    for i in range(integer, limit + 1, integer):
                list1.append(i)
    return list1

def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()


def sum_str(a, b):
    x = int(a + b)
    return str(x)

def sum_str(a, b):
    if a == "":
        a = "0"
    if b == "":
        b = "0"
    return str(int(a) + int(b))

def merge_arr(arr1, arr2):
    x = sorted(set(arr1 + arr2))
    return x

def invert(lst):
    return [-x for x in lst]