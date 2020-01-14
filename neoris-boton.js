const tboton = document.createElement(`template`);

tboton.innerHTML= `
<button> Verificar </button>
`;

class NeorisBoton extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode : `open`});
        this._shadowRoot.appendChild(tboton.content.cloneNode(true));

        var boton = this._shadowRoot.querySelector(`button`);

        boton.addEventListener(`click`, ()=>{
            
            console.log(neorisT.input.value);
            console.log(neorisP.input.value);
            console.log(neorisM.input.value);

            let neorisTXT = neorisT.input.value;
            let neorisCont = neorisP.input.value;
            let neorisCor = neorisM.input.value;


            let regexMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            let alertaMail = "";

        

            if(neorisTXT.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
                neorisTXT = neorisTXT;
            }
            else{
                neorisTXT = neorisTXT.toUpperCase();
            }

            if(regexMail.test(neorisCor)){
                
                 alertaMail = "Mail válido";
            }
            else{
                 alertaMail = "Mail inválido"
            }

           

            alert(neorisTXT + alertaMail+ neorisCont);
        }


        )
    };
}
window.customElements.define(`neoris-boton`, NeorisBoton);