'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

 window.renderStatistics = function(ctx) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', 110, 40);
  ctx.fillText('Список результатов:', 110, 68);


  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 180, 260);
  ctx.fillRect(180, CLOUD_X, BAR_HEIGHT, 150);

  ctx.fillText('Иван', 260, 260);
  ctx.fillRect(260, CLOUD_X, BAR_HEIGHT, 150);

  ctx.fillText('Юлия', 340, 260);
  ctx.fillRect(340, CLOUD_X, BAR_HEIGHT, 150);





  var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText();
    ctx.fillRect();
  }
};
