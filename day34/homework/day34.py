def cookie(x):
    if type(x) == str:
        return 'Who ate the last cookie? It was Zach!'
    if type(x) == float or type(x) == int:
        return 'Who ate the last cookie? It was Monica!'
    else:
        return 'Who ate the last cookie? It was the dog!'

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    x = []
    for i in birds:
        if i not in geese:
            x.append(i)
    return(x)

def past(h, m, s):
    return (3600 * h + 60 * m + s) * 1000

def billboard(name, price=30):
    cout = 0
    for i in name:
        cout += price
    return cout

def get_real_floor(n):
    if n <= 0:
        return n
    elif n < 13:
        return n - 1
    else:
        return n - 2