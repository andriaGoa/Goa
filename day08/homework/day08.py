number = int(input("enter a number: "))
if number < 10:
    print("the number is less than 10.")
else:
    print("the number is more than 10.")

number = int(input("enter a number: "))
if number % 2 == 0:
    print("the number is even.")
else:
    print("the number is odd.")

number = int(input("enter a number: "))
if number > 0:
    print("the number is positive.")
else:
    print("the number is not positive.")

num1 = int(input("enter the first number: "))
num2 = int(input("enter the second number: "))
if num1 == num2:
    print("the numbers are equal.")
else:
    print("the numbers are not equal.")

num = int(input("enter a number: "))
if num > 100 and num % 2 == 0:
    print("the number is more than 100 and even.")
else:
    print("the number is either less 100 and not even.")

num = int(input("enter a number: "))
if num % 5 == 0 or num % 10 == 0:
    print("the number is divisible by 5 or 10.")
else:
    print("the number is neither divisible by 5 or by 10.")

num = int(input("enter a number: "))
if num < 0:
    print("the number is less than 0.")
else:
    print("the number is not less than 0.")

num1 = int(input("please enter a number: "))
if type(num1) == int:
    print("this number is an integer")
else:
    print("the number is not a integer")

age = int(input("enter your age: "))
if age >= 18:
    print("you are an adult.")
else:
    print("you are not an adult.")

num = int(input("enter a number: "))
if num % 2 == 0 or num % 3 == 0:
    print("the number is even or divisible by 3.")
else:
    print("the number is not even and is not divisible by 3.")

num = int(input("enter a number: "))
if num == 1 or num == 0:
    print("the number is either 1 or 0.")
else:
    print("the number is neither 1 nor 0.")

num1 = int(input("enter a number: "))
num2 = int(input("enter another number"))
if num1 > num2 and num1 % 10 == 0:
    print("num1 is bigger than num 2 and is divisable by 10")

num = int(input("enter a number: "))
if num < 0 or num % 2 == 0:
    print("the number is negative or even.")
else:
    print("the number is not negative or even.")

num = int(input("enter a number: "))
if num > 0 and num % 20 == 0:
    print("the number is divisible by 20.")
else:
    print("the number is not divisible by 20.")

num = int(input("enter a number: "))
if num < 50 and num % 10 == 0:
    print("the number is less than 50 and divisible by 10.")
else:
    print("the number is either greater than or equal to 50 or not divisible by 10.")
