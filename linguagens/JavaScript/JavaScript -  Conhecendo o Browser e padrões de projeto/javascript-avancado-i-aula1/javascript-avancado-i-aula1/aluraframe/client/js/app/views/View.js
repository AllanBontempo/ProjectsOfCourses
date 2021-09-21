class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método template deve ser implementado em classes filhas.');
    }

    update(modelo) {
        this._elemento.innerHTML = modelo.template(modelo);
    }

}