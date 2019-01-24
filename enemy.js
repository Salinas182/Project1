function Enemy(game, obj) {
  this.game = game;

  this.enemy = new Image();
  this.enemy.src = obj.img;

  this.x0 = obj.x0;
  this.x = obj.x0;
  this.y = obj.y;
  this.objectWidth = obj.width;

  this.w = 75;
  this.h = 100;

  this.direction = 1;
}

Enemy.prototype.draw = function () {
  this.game.ctx.drawImage(this.enemy, this.x, this.y, this.w, this.h);
  this.move();
}

Enemy.prototype.move = function () {

  this.leftLimit = this.x0;
  this.rightLimit = this.x0 + (this.objectWidth - this.w);
  this.x -= this.direction;

  if (this.x < this.leftLimit || this.x > this.rightLimit) {
    this.direction *= -1;
  }
}


// function Enemy(game) {
//   this.game = game;
//   this.x0 = this.game.canvas.width - 100;
//   this.x = this.x0;
//   this.y = this.game.canvas.height * 0.8;

//   this.enemy = new Image();
//   this.enemy.src = "images/batman-prueba.png";

//   this.w = 75;
//   this.h = 100;

//   this.direction = 1;
// }



// function EnemyB(game) {
//   this.game = game;
//   this.x0 = this.game.canvas.width / 4;
//   this.x = this.x0;
//   this.y = this.game.canvas.height * 08;

//   this.enemyB = new Image();
//   this.enemyB.src = "images/batman-prueba.png";

//   this.w = 75;
//   this.h = 100;

//   this.direction = 1;
// }

// EnemyB.prototype.draw = function () {
//   this.game.ctx.drawImage(this.enemyB, this.x, this.y, this.w, this.h);
//   this.move();
// }

// EnemyB.prototype.move = function () {
//   this.leftLimit = this.x0 - 200;
//   this.rightLimit = this.x0;
//   this.x -= this.direction;

//   if (this.x < this.leftLimit || this.x > this.rightLimit) {
//     this.direction *= -1;
//   }
// }