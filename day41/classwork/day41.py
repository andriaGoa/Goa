def get_count(sentence):
    count = 0
    for i in sentence:
        if i in "aeiou":  
            count += 1
    return count

def square_digits(num):
    s = ""
    
    num = str(num)
    
    for i in num:
        s += str(int(i) ** 2)
    return int(s)

def high_and_low(numbers):
    numbers = numbers.split(" ")
    l = []
    for i in numbers:
        l.append(int(i))
    
    return f"{max(l)} {min(l)}"

def get_middle(s):
    if len(s) % 2 == 0:
        return s[(len(s) // 2) - 1] + s[len(s) // 2]
    else:
        return s[len(s) // 2]