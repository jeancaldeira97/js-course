class NegociacaoController {
   
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }
   
    adiciona(event) {
        event.preventDefault();
        let data = new Date(...this._inputData.value.split('-'));
      //  let negociacao = new Negociacao(
        //       this._inputData.value,
        //       this._inputaQuantidade.value,
        //       this._inputValor.value
       //    );

        console.log(data);
    }
}