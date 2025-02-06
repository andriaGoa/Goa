random_numbers = [1, 2, 3, 4, 5, 6, 7]
for i in random_numbers:
    if i % 2 == 0:
        random_numbers.remove(i)
print(random_numbers)