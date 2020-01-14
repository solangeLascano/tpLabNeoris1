const t = document.createElement(`template`);

t.innerHTML = `
<input type="text" id="palabra" placeholder="Ingrese un texto"/>
`;

class NeorisTexto extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:`open`});
        this._shadowRoot.appendChild(t.content.cloneNode(true));

        let imp1 = this._shadowRoot.querySelector(`input`);
        imp1.type = "text";

        neorisT.input =imp1;

    }

}

window.customElements.define(`neoris-texto`,NeorisTexto);