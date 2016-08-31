// Slaying mode
var slaying = true;

// Random hit damage
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);

// Really?
var totalDamage = 0;

// Game start
while(slaying){
    slaying = false;
    
    if(youHit){
        console.log("Yes! you hit the dragon!");
        totalDamage += damageThisRound;
        slaying = false;
        
     if(totalDamage >= 4){
         console.log("You win!");
        }
        else {
         youHit = Math.floor(Math.random() * 2);    
        };
      }
     else{
         console.log("Oh! you are toasted!");
         slaying = false;
    };
};
