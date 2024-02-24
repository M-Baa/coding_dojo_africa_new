class user:
    def __init__(self,first_name,last_name,email,age,is_rewards_members=False,gold_card_points=0):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_rewards_members=is_rewards_members
        self.gold_card_points=gold_card_points
    def display_info(self):
        print(f"first.name:{self.first.name},\n last_name:{self.last_name},\n email:{self.email},\n age:{self.age}is_rewards_members:{self.is_rewards_members},\n gold_card_points:{self.gold_card_points}")

    def enroll(self):
        self.is_rewards_members=True
        self.gold_card_points=200
    
    def spend_points(self,amount):
        if amount<self.gold_card_points:
            self.gold_card_points ==  self.gold_card_points-amount
            print(f"{amount}points spent.")
        
maryem = user ("maryem","belhaj","mary@gmail.com",24)
iheb = user ("iheb", "mechi","iheb@gmail.com",17)
maryem.display_info()
maryem.enroll()
maryem.spend_points(50)
iheb.enroll()
iheb.display_info()
iheb.spend_points(80)


