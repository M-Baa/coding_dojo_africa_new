class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self 

# Example usage:
user1 = User("maryem belhaj", "mary@gmail.com")
user1.make_deposit(100)

print(user1.account.balance)  
