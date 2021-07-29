class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        const data = DateHelper.textoParaData(this._inputData.value);
        const quantidade = this._inputQuantidade.value;
        const valor = this._inputValor.value;
        const negociacao = new Negociacao(data, quantidade, valor);

        console.log(data);
        console.log(negociacao);

        this._listaNegociacoes.adiciona(negociacao);
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade = 1;
        this._inputValor = 0.0;

        this._inputQuantidade.focus();
    }

}