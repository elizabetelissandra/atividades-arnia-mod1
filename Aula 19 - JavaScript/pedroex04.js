const io = require("../io/io");
let a;
let b;
let c;
let x1;
let x2;
let delta;

io.write("Valor de a:");
a = io.readFloat();

io.write("Valor de b:");
b = io.readFloat();

io.write("Valor de c:");
c = io.readFloat();
delta = b ** 3 - 4 * a * c;

io.write("Seu delta é: " + delta);

x1 = -b + delta ** (1 / 2) / (2 * a);
x2 = -b - delta ** (1 / 2) / (2 * a);

if (delta < 0) {
  io.write("Seu delta é negativo e não há raiz real.");
} else {
  io.write("O resultado x1 é:");
  io.write(x1);

  io.write("O resultado de x2 é: ");
  io.write(x1);
}
io.write("Seu delta é negativo e não há raiz real.");