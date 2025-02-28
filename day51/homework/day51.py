#???

def sum_triangular_numbers(n):

    if n < 0:
        return 0
    
    sum = sum_triangular_numbers(n-1)
    return sum + n*(n + 1)/2

#???

def delete_nth(order,max_e):
    answer = []
    for i in order:
        if answer.count(i) < max_e: 
            answer.append(i)
    return answer

def shortest_steps_to_num(num):
    steps = 0
    while num != 1:
        if num % 2:
            num -= 1
        else:
            num //= 2
        steps += 1
    return steps

#???