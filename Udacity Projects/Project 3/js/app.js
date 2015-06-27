//Define Global variables
var player;
var allEnemies = [], isGameOver = false;

// Enemies our player must avoid
var Enemy = function() {
    //Initialize in 3 different starting points (off screen)
    this.initial_x = -100;
    this.initial_y = starting_row();

    //Initialize 3 different speeds
    this.speed = speed();

    this.x = this.initial_x
    this.y = this.initial_y;

    //assign image of the bug
    this.sprite = 'images/enemy-bug.png';

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //If enemy has run off the screen reinitialize the enemy with new starting point and speed
    if(this.x > 550){
        this.x = this.initial_x;
        this.y = starting_row();
        this.speed = speed();
    }

    //Depending on the speed, increase the position of the enemy
    switch(this.speed) {
        case 1:
            this.x = this.x + (100) * dt;
            break;
        case 2:
            this.x = this.x + (500) * dt;
            break;
        case 3:
            this.x = this.x + (50) * dt;
            break;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var Player = function() {
    //Initialize Player starting position
    this.x = 200;
    this.y = 380;

    //Choose a character: male or female
    this.sprite = 'images/char-boy.png';
    if(document.getElementById("m_sprite").checked){
        this.sprite = 'images/char-boy.png';
    }else if (document.getElementById("f_sprite").checked) {
        this.sprite = 'images/char-pink-girl.png';
    }
};

Player.prototype.update = function(dt) {
    player.render();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    if(input == 'left' && this.x != 0){
        this.x = this.x - 100;
    }else if(input == 'right' && this.x != 400){
        this.x = this.x + 100;
    }else if(input == 'up' && this.y != 380){
        this.y = this.y + 85;
    }else if(input == 'down' && this.y != -45){
        this.y = this.y - 85;
    }
    player.update()
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    if(isGameOver == false) {
        var allowedKeys = {
            37: 'left',
            38: 'down',
            39: 'right',
            40: 'up'
        }
        player.handleInput(allowedKeys[e.keyCode]);
    }
})

//----------------Helper Functions -----------------
//Initialize sprites and their positions
function intialize_sprites() {
    player = new Player();
    var enemy1 = new Enemy();
    allEnemies = [enemy1];
}

//Initializes the enemy at a particular row
function starting_row(){
    var initial_y;
    switch(Math.floor((Math.random() * 3) + 1)) {
        case 1:
            initial_y = 295;
            break;
        case 2:
            initial_y = 210;
            break;
        case 3:
            initial_y = 125;
    }
    return initial_y;
}

//Initializes the enemy at a particular speed: 1 to 3
function speed(){
    return Math.floor((Math.random() * 3) + 1)
}