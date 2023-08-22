class Cor {
    #red;
    #green;
    #blue;

    constructor(r,g,b) {
        this.#verifica(r,g,b);
        this.#red = r;
        this.#green = g;
        this.#blue = b;
    }

    #verifica(r,g,b) {
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            throw new Error("Valores invalidos");
        }
    }

    #rgbParaHtml(r,g,b) {
        let decCor = 0x1000000 + 0x10000 * r + 0x100 * g + b;
        return '#' + decCor.toString(16).substr(1);
    }

    get rgb() {
        return ((this.#red << 16) | (this.#green << 8) | this.#blue);
    }

    get html() {
        return this.#rgbParaHtml(this.#red, this.#green, this.#blue);
    }

    inverter() {
        return new Cor(255 - this.#red, 255 - this.#green, 255 - this.#blue);
    }
}

const vermelho = new Cor(255,0,0);
const vermelhoInverso = vermelho.inverter();
console.log(vermelho.rgb);
console.log(vermelho.html);
console.log(vermelhoInverso.rgb);
console.log(vermelhoInverso.html);
