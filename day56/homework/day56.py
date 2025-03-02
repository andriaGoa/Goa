def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    elif name[2] not in 'aeiou': 
        return name[:3]
    elif name[2] in 'aeiou':
        return name[:4]
    
def withdraw(n):
    i = 0
    while n%50!=0:
        n = n-20
        i = i + 1
    return [n//100,(n-(100*(n//100)))//50,i]

#???

#???
from math import ceil

def branch(n):
    if n == 1:
        return 0
    l = int(ceil(n ** 0.5)) // 2
    n -= (2 * l - 1) ** 2 + 1
    return n // (2*l or 1)

#???

#???

#???