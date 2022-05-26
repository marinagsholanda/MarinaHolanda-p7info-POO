"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ponto_1 = require("./ponto");
const quadril_tero_1 = require("./quadril\u00E1tero");
let pontoA = new ponto_1.Ponto(0, 6);
let pontoB = new ponto_1.Ponto(9, 0);
let pontoC = new ponto_1.Ponto(5, 2);
let pontoD = new ponto_1.Ponto(9, 3);
let pontoE = new ponto_1.Ponto(13, 5);
let quadr = new quadril_tero_1.Quadrilatero(pontoA, pontoB);
console.log(quadr.pertenceArea(pontoC) ? "O ponto C pertence a área do quadrilátero!" : "O ponto C não pertence a área do quadrilátero!");
console.log(quadr.pertenceArea(pontoD) ? "O ponto D pertence a área do quadrilátero!" : "O ponto D não pertence a área do quadrilátero!");
console.log(quadr.pertenceArea(pontoE) ? "O ponto E pertence a área do quadrilátero!" : "O ponto E não pertence a área do quadrilátero!");
