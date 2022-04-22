'use strict';

var game = {
  width: 640,
  height: 360,
  ctx: null,
  platform: null,
  ball: null,
  rows: 4,
  cols: 8,
  blocks: [],
  sprites: {
    background_game: null,
    platform: null,
    ball: null,
    block: null
  },
  init: function() {
    var canvas = document.getElementById('mycanvas');
    this.ctx = canvas.getContext('2d');

    window.addEventListener('keydown', function(e) {
      if (e.keyCode == 37) {
        game.platform.currentSpeed = game.platform.maxSpeed

      } else if (e.keyCode == 39) {
    
    
      }
    });
  },
  load() {
    for (var key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = 'images/'+ key + '.png';
    }
  },
  create() {
    for (var row = 0; row < this.rows; row++) {
      for (var col = 0; col < this.cols; col++) {
        this.blocks.push({
          x: 71 * col + 35,
          y: 30 * row + 35,
          width: 69,
          height: 27
        });
      }
    }
  },
  start() {
    this.init();
    this.load();
    this.create();
    this.run();
  },
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.drawImage(this.sprites.background_game, 0, 0);
    this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
    this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);

    this.blocks.forEach(function(element) {
      this.ctx.drawImage(this.sprites.block, element.x, element.y);
    }, this);
  },
  run() {
    this.render();
    window.requestAnimationFrame(function() {
      game.run();
    });
  }
};

game.ball = {
  width: 30,
  height: 30,
  frame: 0,
  x: 340,
  y: 270,
};

game.platform = {
  x: 300,
  y: 300,
  maxSpeed: 6,
  currentSpeed: 0

};

window.addEventListener('load', function() {
  game.start();
});
