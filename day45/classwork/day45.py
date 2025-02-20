def evaluate(equation):
    nums = []
    
    equation = equation.split(" @ ")
    
    for i in equation:
        nums.append(int(i))
    
    return nums
    for i in nums[1:]:
        if i == 0: return None
        result = func(result, i)
    return result

def is_valid_walk(walk):
    
    if (walk.count("n") == walk.count("s")) and (walk.count("e") == walk.count("w")) and len(walk) == 10:
        return True
    else:
        return False

def expanded_form(num):
    num = str(num)
    
    result = []

    for index,num in enumerate(num[::-1]):
        if int(num) != 0:
            result.append(num + ("0" * index))
    return " + ".join(result[::-1])
        