class Player:
    def __init__(self, data):
        self.name = data['name']
        self.age = data['age']
        self.position = data['position']
        self.team = data['team']

    @classmethod 
    def add_players(cls, data):
        player_objects = []
        for player_data in data:
            player_objects.append(cls(player_data))
        return player_objects
    
    def __repr__(self):
        return f"Player: {self.name}, {self.age}, Position: {self.position}, Team: {self.team}"


kevin = {
    "name": "Kevin Durant",
    "age": 34,
    "position": "Small Forward",
    "team": "Brooklyn Nets"
}

jason = {
    "name": "Jason Tatum",
    "age": 24,
    "position": "Small Forward",
    "team": "Boston Celtics"
}

kyrie = {
    "name": "Kyrie Irving",
    "age": 32,
    "position": "Point Guard",
    "team": "Brooklyn Nets"
}

player_jason = Player(jason)
player_kevin = Player(kevin)
player_kyrie = Player(kyrie)


print(player_jason)
print(player_kevin)
print(player_kyrie)
