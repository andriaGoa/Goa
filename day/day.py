def calculator(a, b):
    x = input("select an action: ")
    if x == "multiplication":
        return(a * b)
    if x == "sum":
        return(a + b)
    if x == "division":
        print(a % b)
    if x == "subtraction":
        print(a - b)
print(calculator(3, 4))