class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

// game object
const game = {
    playing: true,
    USS_Schwarzenegger: new Spaceship('USS Schwarzenegger', 20, 5, 0.7),
    enemyShipNames: ['Death Star', 'Shockwave', 'Destroyer', 'Vengeance', 'Delta', 'AlphaOne'],
    enemyShips: [],

    //attack method
    attack: function(attacker, attacked) {
       console.log(`%c${attacker.name} is attacking ${attacked.name}!`, 'color:green');
       //check if attack higher than attacked ship's directory
       if (Math.random() < attacked.accuracy) {
           console.log(`%c${attacked.name} has been hit!`, 'color:blue');
           //remove hull points of attacked ship
           attacked.hull = attacked.hull - attacker.firepower;
           //if hull reaches 0, keep it at 0 (no negative hull points)
           if (attacked.hull < 0) {attacked.hull = 0};
           //tell us remaining hull score of attacked ship
           console.log(`%c${attacked.name}'s hull is now ${attacked.hull}.`, 'font-style: italic; background: azure; border: 1px solid grey;');
           //if the attacked ships' hull reached 0 and is destroyed
           if (attacked.hull === 0)
               {console.log(`%c${attacked.name} has been DESTROYED!`, 'color: red');
               if (attacked.name === 'USS Schwarzenegger') {
                   console.log('%cYou LOSE!', 'font-size: 40px');
                   //if you are destroyed; exit out of game
                   this.playing = false;
                }
                else {
                //remove destroyed enemy ship out of array
                this.removeDestroyed(attacked);
                //check if there are any remaining enemy ships
                if (this.enemyShips.length > 0) {
                    //prompt user if they want to attack next ship or retreat
                    let answer = prompt('Would you like to attack the next ship or retreat? \nType"attack" or "retreat"\n(Attacking requires 1 fuel');
                    //if answer is retreat, game is over
                    if (answer.toLowerCase() === 'retreat')
                        {console.log('%cGame Over.', 'font-size: 40px');
                        //exit out of game
                        this.playing = false;}
                    else if (answer.toLowerCase() === 'attack') {
                        //attack next enemy ship
                        this.pickShip();
                    }
                }
                    else {
                        //exit out of game after victory
                        console.log('%cYou saved Earth!', 'color: green; font-size: 40px');
                        this.playing = false;
                    }
                }
            }
            //else, attacked becomes the attacker
            else {
                this.attack(attacked, attacker);
            }
        }
        else {
            //tell us the attacking ship missed
            console.log(`%c${attacker.name} has missed!`, 'color: magenta');
            this.attack(attacked, attacker);
        }
    },

    //making enemy ships function
    createEnemies() {
        //iterate over list of enemy ship names
        for(ship of this.enemyShipNames) {
            //for each enemy ship name:
            let name = ship;
            //randomize its hull number between 3 - 6
            let hull = (Math.floor(Math.random() * (6-3+1) + 3));
            //randomize its firepower between 2 - 4
            let firepower = (Math.floor(Math.random() * (4-2+1) + 2));
            //randomize its accuracy between 0.6 - 0.8
            let accuracy = Math.random() * (((8-6) + 6) /10);
            //create a new Ship object with those values
            let enemyShip = new Spaceship(ship, hull, firepower, accuracy);
            //add that object to the array of enemy ships
            this.enemyShips.push(enemyShip);
        }
    },

    //reset function
    reset: function() {
        game.playing = true;
        game.USS_Schwarzenegger.hull = 20;
        game.enemyShips = [];
    },

    //show enemy ships function
    displayEnemy: function() {
        let description = '';
        for(i=0; i<this.enemyShips.length; i++) {
            let enemy = this.enemyShips[i];
             description = description +`[${i+1}] ${enemy.name}\n`
        }
        return prompt('Which enemy ship would you like to attack? \n'+description);
    },

    //pick which ship to attack
    pickShip: function() {
        //ask user which enemy ship to attack
        let EnemyToAttack = parseInt(this.displayEnemy())-1;
        //attack chosen ship
        this.attack(this.USS_Schwarzenegger, this.enemyShips[EnemyToAttack]);
    },

    //remove destroyed ship from array
    removeDestroyed: function(enemy) {
        for(i=0; i < this.enemyShips.length; i++) {
            if (enemy === this.enemyShips[i]) {
                for(ship of this.enemyShips) {
                }
                this.enemyShips.splice(i, 1);
            };
        };
    },

    //play function
    play: function() {
        //let player decide to play
         if (confirm("If your console isn't open, press:\nCommand+Option+J on Mac\nCommand+Shift+J on Windows\n\nGame is ready. Begin? "));
        if (confirm("Welcome aboard the USS Schwarzenegger, Captain. \nDo you wish to engage in a deadly space battle?")) {
            alert('Game on!');
            //get our array of enemies
            this.createEnemies();
            //check the conditional loop
            while (this.playing === true) {
                //ask user which enemy ship to attack
                //start the game by attacking first enemy ship
                //this.attack(this.USS_Schwarzenegger, this.enemyShips[enemyToAttack]);
                this.pickShip();
            }
            //let player play again if they want to
            if (confirm('Would you like to play again?')) {
                alert('Here we go again!');
                game.reset();
                game.play();
            }
            else {
                alert('Alright. Take a break, space hero!');
                this.playing = false;
            }
        }
        else {
            alert('You chose not to save Earth.');
            this.playing = false;
        };
    }
}

console.log(game.play());
