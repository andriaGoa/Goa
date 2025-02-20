def sequence_sum(begin_number, end_number, step):
    sum = 0
    for i in range(begin_number, end_number + 1, step):
        sum += i
    return sum



def logical_calc(arr, op):
    
    result = arr[0]
    for i in arr[1:]:
        if op == 'AND':
            result = result and i
        if op == "OR":
            result =  result or i
        if op == "XOR":
            result =  result ^ i
    return result

def  lowercase_count(string):
    count = 0
    case = "abcdefghijklmnopqrstuvwxyz"
    for i in string:
        if i in case:
            count = count +1
    return count

def small_enough(array, limit):
    for i in array:
        if not i <= limit:  return False
    return True

def converter(mpg):
    conversion_factor = 1.609344 / 4.54609188
    kpl = mpg * conversion_factor
    return round(kpl, 2)