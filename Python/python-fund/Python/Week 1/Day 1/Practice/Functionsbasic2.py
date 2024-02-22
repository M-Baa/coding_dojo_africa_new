#countdown 
def countdown(number):
    result = []
    while number >=0:
        result.append(number)
        number -= 1 
    return result

#Print and Return 
def print_and_return (numbers):
    print(numbers[0])
    return numbers[1]


#First Plus Length 
def first_plus_length(lst):
    first_value =[0]
    length =len(lst)
    return first_value + length

#Values Greater than Second
def values_greaterthansecond (lst):
    if len(lst) <2:
        return False
    
    second_value = lst[1]
    filtered_list = []

    for num in lst:
        if num > second_value:
            filtered_list.append(num)


    print("the number of values greater than the second value:",len(filtered_list))

    return filtered_list

#This Length, That Value 
def length_value(size,value):
    newlist = [value] * size
    return newlist
