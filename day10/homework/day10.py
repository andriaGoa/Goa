number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
operation = input("What operation would you like to perform? (add, subtract, multiply, divide): ")

if operation == "add":
    result = number1 + number2
    print(result)
elif operation == "subtract":
    result = number1 - number2
    print(result)
elif operation == "multiply":
    result = number1 * number2
    print(result)
elif operation == "divide":
        result = number1 / number2
        print(result)
else:
    print("Invalid operation!")
