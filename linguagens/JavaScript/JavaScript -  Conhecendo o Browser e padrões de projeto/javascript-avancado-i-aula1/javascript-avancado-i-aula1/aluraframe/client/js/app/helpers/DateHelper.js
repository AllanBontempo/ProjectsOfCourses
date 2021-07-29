class DateHelper {

    constructor() {
        throw new Error('A classe DateHelper não pode ser instanciada!');
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato yyyy-mm-dd');

            return new Date(...texto.split('-')
            .map((item, index) => item - index % 2)
        );
    }

    static DataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

}