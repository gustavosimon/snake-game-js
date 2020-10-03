// Snake game with HTML + JS

window.onload = function () {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  // Define a velocidade do jogo, quanto menor o resultado da divisão mais rápido
  setInterval(game, 1000 / 15);
};
// Define as variáveis necessárias
// A snake começa com 5 quadradinhos por padrão
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
// Função que desenha o jogo no HTML
function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }
  // Desenha o quadrado principal
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 600, 600);

  ctx.fillStyle = "yellow";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }
  if (ax == px && ay == py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

// Função para avaliar qual a tecla pressionada para direcionar a snake
function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
}
