class Player {
  constructor(){
    this.index = null;
    this.distamce = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + playerCount;
    database.ref(playerIndex).set({ 
      name:this.name ,
      distance:this.distance
      });
  }
  static GetPlayerInfo(){
    var playerInfoRef = database.ref;
    ref.on("value",(data) => { allPlayers=data.value() });
  }
}