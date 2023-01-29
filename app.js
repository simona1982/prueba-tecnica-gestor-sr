"use strict";
// Funcion anomina autoinvocada
(() => {
    class Agente {
        constructor(agente) {
            this.agente = agente;
        }
        funcionalidad1(listaNumerosReales) {
            switch (this.agente.toUpperCase()) {
                case "A":
                    const avg = this.getMedia(listaNumerosReales);
                    console.log(`la media aritmetica del Agente: ${this.agente.toUpperCase()} es ${avg}`);
                    break;
                case "B":
                    const mediaArmonica = this.getMediaArmonica(listaNumerosReales);
                    console.log(`la media armonica del Agente: ${this.agente.toUpperCase()} es ${mediaArmonica}`);
                    break;
                case "C":
                    const mediana = this.getMediana(listaNumerosReales);
                    console.log(`la madiana del Agente: ${this.agente.toUpperCase()} es ${mediana}`);
                    break;
            }
        }
        funcionalidad2(tamanoEscalera) {
            switch (this.agente.toUpperCase()) {
                case "A":
                    const escalera1 = this.getStaircase1(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera1}`);
                    break;
                case "B":
                    const escalera2 = this.getStaircase2(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera2}`);
                    break;
                case "C":
                    const escalera3 = this.getStaircase3(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera3}`);
                    break;
            }
        }
        getStaircase1(tamanoEscalera) {
            const arr = [];
            let linea = "";
            let escalera = "";
            for (let i = 1; i <= tamanoEscalera; i++) {
                linea = "";
                for (let j = 1; j <= tamanoEscalera; j++) {
                    if (j > tamanoEscalera - i) {
                        linea += "#";
                    }
                    else {
                        linea += " ";
                    }
                }
                arr.push(linea);
            }
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });
            return escalera;
        }
        getStaircase2(tamanoEscalera) {
            const arr = [];
            let linea = "";
            let escalera = "";
            for (let i = 0; i <= tamanoEscalera; i++) {
                let k = 0;
                if (i === 0) {
                    linea = "";
                }
                else {
                    linea = "";
                    while (k < i) {
                        linea += " ";
                        k++;
                    }
                }
                for (let j = 1; j <= tamanoEscalera; j++) {
                    if (j > tamanoEscalera - i) {
                        linea += " ";
                    }
                    else {
                        linea += "#";
                    }
                }
                arr.push(linea);
            }
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });
            return escalera;
        }
        getStaircase3(tamanoEscalera) {
            const arr = [];
            let linea = "";
            let escalera = "";
            for (let i = 0; i <= tamanoEscalera; i++) {
                linea = "";
                for (let j = 1; j <= tamanoEscalera; j++) {
                    if (j > tamanoEscalera - i) {
                        linea += " ";
                    }
                    else {
                        linea += "#";
                    }
                }
                arr.push(linea);
            }
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });
            return escalera;
        }
        getMedia(listaNumerosReales) {
            const avg = listaNumerosReales.reduce((total, valorActual) => total += valorActual, 0) / listaNumerosReales.length;
            return parseFloat(avg.toFixed(2));
        }
        getMediaArmonica(listaNumerosReales) {
            const h = listaNumerosReales.length / listaNumerosReales.reduce((total, valorActual) => total += 1 / valorActual, 0);
            return parseFloat(h.toFixed(2));
        }
        getMediana(listaNumerosReales) {
            listaNumerosReales.sort((a, b) => a - b);
            const l = listaNumerosReales.length;
            // Validar si la cantidad de numeros es par o impar
            return l % 2 == 0
                ? listaNumerosReales.slice(l / 2 - 1, l / 2 + 1).reduce((a, b) => a + b) / 2
                : listaNumerosReales.slice((l / 2), l / 2 + 1)[0];
        }
    }
    const agenteA = new Agente("A");
    const agenteB = new Agente("B");
    const agenteC = new Agente("C");

    const listaNumerosReales = [1, 10, 23, 25.4];
    const tamanoEscalera = 10;


    // Funcionalidad 1 para cada Agente
    agenteA.funcionalidad1(listaNumerosReales);
    agenteB.funcionalidad1(listaNumerosReales);
    agenteC.funcionalidad1(listaNumerosReales);
    // Funcionalidad 1 para cada Agente
    agenteA.funcionalidad2(tamanoEscalera);
    agenteB.funcionalidad2(tamanoEscalera);
    agenteC.funcionalidad2(tamanoEscalera);
})();
