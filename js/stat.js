'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';

var SHADOW_CLOUD_X = 110;
var SHADOW_CLOUD_Y = 20;
var SHADOW_CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';

var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP - TEXT_WIDTH;

var TEXT_COLOR = '#000';



var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElementTime = function(array) {
  var MaxElementTime = array[0];

  for(var i = 0; i < array.length; i++) {
    if (array[i] > MaxElementTime) {
      MaxElementTime = array[i];
    }
  }
  return MaxElementTime;
};

 window.renderStatistics = function(ctx, players, times) {

  renderCloud(ctx, SHADOW_CLOUD_X, SHADOW_CLOUD_Y, SHADOW_CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили', SHADOW_CLOUD_X, TEXT_WIDTH - GAP);
  ctx.fillText('Список результатов:', SHADOW_CLOUD_X, TEXT_WIDTH + GAP);

  var maxTime = getMaxElementTime(times);
  var playerInddex = 1;

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_HEIGHT - GAP);

    ctx.fillStyle = 'hsl(235, 87%, ' + HslVariable + '%)';
    if (i===0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect((CLOUD_X) * playerInddex + TEXT_WIDTH, CLOUD_X + (barHeight - (barHeight *times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.floor(times[i]), (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_X - (GAP) * 2 +(barHeight - (barHeight *times[i]) / maxTime));

    var HslVariable = Math.ceil((times[i] / 100 * 2));
    playerInddex++;
  }
};       /*в целом оно работает), немного промахнулся с общей шириной*/



  /*var playerInddex = 1;    Удалю чуть позже, оставил на всякий
  var playerName = "Вы";
  ctx.fillStyle = '#000';
  ctx.fillText(playerName, (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_HEIGHT - GAP);
  ctx.fillRect((CLOUD_X) * 1 + TEXT_WIDTH, CLOUD_X, BAR_WIDTH, CLOUD_X + TEXT_WIDTH);

  var playerInddex = 2;
  var playerName = "Иван";
  ctx.fillText(playerName, (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_HEIGHT - GAP);
  ctx.fillRect((CLOUD_X) * 2 + TEXT_WIDTH, CLOUD_X, BAR_WIDTH, CLOUD_X + TEXT_WIDTH);

  var playerInddex = 3;
  var playerName = "Юлия"
  ctx.fillText(playerName, (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_HEIGHT - GAP);
  ctx.fillRect((CLOUD_X) * 3 + TEXT_WIDTH, CLOUD_X, BAR_WIDTH, CLOUD_X + TEXT_WIDTH);

  var playerInddex = 4;
  var playerName = "Максим";
  ctx.fillText(playerName, (CLOUD_X) * playerInddex + BAR_WIDTH, CLOUD_HEIGHT - GAP);
  ctx.fillRect((CLOUD_X) * 4 + TEXT_WIDTH, CLOUD_X, BAR_WIDTH, CLOUD_X + TEXT_WIDTH);*/
