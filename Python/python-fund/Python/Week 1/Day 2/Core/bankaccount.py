class bankaccount:
    def __init__ (self,init_rate,balance):
        self.init_rate=init_rate
        self.balance=balance
    def deposit(self,amount):
        self.balance += amount
        print(f"balance:{self.balance}")
    def withdraw(self,amount):
        self.amount -= amount
        print(f"balance:{self.balance}")
    def display_acount_info(self):
        print(f"balance:{self.balance}")
    def yield_interest(self):
        self.balance += self.balance * self.init_rate
        print(f"balance:{self.balance}")

saving_account=bankaccount(2,200)
saving_account.deposit(50)
saving_account.withdraw(50)
saving_account.display_acount_info()
saving_account.yield_interest()



