// Funcion anomina autoinvocada
(()=> {
    class Agente {
    
        constructor(
            private agente: string
        ) {}

        public funcionalidad1(listaNumerosReales: Array<number>) {
            switch(this.agente.toUpperCase()) {
                case "A": 
                    const avg: number = this.getMedia(listaNumerosReales);
                    console.log(`la media aritmetica del Agente: ${this.agente.toUpperCase()} es ${avg}`);
                    break;
                case "B":
                    const mediaArmonica: number = this.getMediaArmonica(listaNumerosReales);
                    console.log(`la media armonica del Agente: ${this.agente.toUpperCase()} es ${mediaArmonica}`);
                    break;
                case "C":
                    const mediana: number = this.getMediana(listaNumerosReales);
                    console.log(`la madiana del Agente: ${this.agente.toUpperCase()} es ${mediana}`);
                    break;
            }
        }

        public funcionalidad2(tamanoEscalera: number) {
            switch(this.agente.toUpperCase()) {
                case "A": 
                    const escalera1: string = this.getStaircase1(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera1}`);
                    break;
                case "B":
                    const escalera2: string = this.getStaircase2(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera2}`);
                    break;
                case "C":
                    const escalera3: string = this.getStaircase3(tamanoEscalera);
                    console.log(`la escalera del Agente: ${this.agente.toUpperCase()} es \n${escalera3}`);
                    break;
            }
        }

        private getStaircase1(tamanoEscalera: number): string {

            const arr = [];
            let linea: string = "";
            let escalera: string = "";

            for(let i = 1; i <= tamanoEscalera; i++) {
                linea="";
                for(let j = 1; j <= tamanoEscalera; j++) {
                    if(j>tamanoEscalera-i) {
                        linea+="#";
                    } else{
                        linea+=" ";
                    }
                }
                arr.push(linea);
            }

            
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });

            return escalera;
        }

        private getStaircase2(tamanoEscalera: number): string {

            const arr = [];
            let linea: string = "";
            let escalera: string = "";

            for(let i = 0; i <= tamanoEscalera; i++) {
                
                let k = 0;

                if(i === 0) {
                    linea="";
                }else {
                    linea = "";
                    while(k < i) {
                        linea += " ";
                        k++;
                    }
                }
               
                for(let j = 1; j <= tamanoEscalera; j++) {
                    if(j>tamanoEscalera-i) {
                        linea+=" ";
                    } else{
                        linea+="#";
                    }
                }
                arr.push(linea);
            }

            
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });

            return escalera;
        }

        private getStaircase3(tamanoEscalera: number): string {

            const arr = [];
            let linea: string = "";
            let escalera: string = "";

            for(let i = 0; i <= tamanoEscalera; i++) {
                linea="";
                for(let j = 1; j <= tamanoEscalera; j++) {
                    if(j>tamanoEscalera-i) {
                        linea+=" ";
                    } else{
                        linea+="#";
                    }
                }
                arr.push(linea);
            }

            
            arr.forEach(linea => {
                escalera += `${linea}\n`;
            });

            return escalera;
        }


        private getMedia(listaNumerosReales: Array<number>): number {
            const avg: number = listaNumerosReales.reduce((total: number, valorActual: number) => total += valorActual, 0) / listaNumerosReales.length;
            return parseFloat(avg.toFixed(2));
        }

        private getMediaArmonica(listaNumerosReales: Array<number>): number {
            const h = listaNumerosReales.length / listaNumerosReales.reduce((total: number, valorActual: number) => total += 1/valorActual, 0)
            return parseFloat(h.toFixed(2));
        }

        private getMediana(listaNumerosReales: Array<number>): number {
            listaNumerosReales.sort((a,b) => a-b);
            const l = listaNumerosReales.length;

            // Validar si la cantidad de numeros es par o impar
            return l%2==0
                ? listaNumerosReales.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
                : listaNumerosReales.slice((l/2), l/2+1)[0];
        }
        
    }

    const agenteA: Agente = new Agente("A");
    const agenteB: Agente = new Agente("B");
    const agenteC: Agente = new Agente("C");
    
    const listaNumerosReales = [1, 10, 23, 25.4];
    const tamanoEscalera: number = 10;

    // Funcionalidad 1 para cada Agente
    agenteA.funcionalidad1(listaNumerosReales);
    agenteB.funcionalidad1(listaNumerosReales);
    agenteC.funcionalidad1(listaNumerosReales);

    // Funcionalidad 1 para cada Agente
    agenteA.funcionalidad2(tamanoEscalera);
    agenteB.funcionalidad2(tamanoEscalera);
    agenteC.funcionalidad2(tamanoEscalera);

})()