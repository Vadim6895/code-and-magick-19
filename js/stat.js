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
var TEXT_WIDTH = 50;
var BAR_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP - TEXT_WIDTH;
var TEXT_COLOR = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElementTime = function (array) {
  var maxElementTime = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElementTime) {
      maxElementTime = array[i];
    }
  }
  return maxElementTime;
};

var victorymessage = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили', SHADOW_CLOUD_X, TEXT_WIDTH - GAP);
  ctx.fillText('Список результатов:', SHADOW_CLOUD_X, TEXT_WIDTH + GAP);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, SHADOW_CLOUD_X, SHADOW_CLOUD_Y, SHADOW_CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  victorymessage(ctx);

  var maxTime = getMaxElementTime(times);
  var saturation;

  for (var i = 0; i < players.length; i++) {
    var actualBarHeight = (barHeight * times[i]) / maxTime;
    saturation = getRandomInt(0, 100);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], (CLOUD_X) * (i + 1) + BAR_WIDTH, CLOUD_HEIGHT - GAP);

    ctx.fillStyle = 'hsl(235, ' + saturation + '%, 43%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect((CLOUD_X) * (i + 1) + TEXT_WIDTH, CLOUD_X + (barHeight - actualBarHeight), BAR_WIDTH, actualBarHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.floor(times[i]), (CLOUD_X) * (i + 1) + BAR_WIDTH, CLOUD_X - (GAP) * 2 + (barHeight - actualBarHeight));
  }
};
