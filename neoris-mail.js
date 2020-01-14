const m = document.createElement(`template`);

m.innerHTML = `
<input type="mail" id="idMail" placeholder="Ingrese su mail"/>
`;

class NeorisMail extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode : `open`});
        this._shadowRoot.appendChild(m.content.cloneNode(`input`));
        var correo = this._shadowRoot.querySelector(`input`);
        correo.type = "mail";

        neorisM.input = correo;

    }
}

window.customElements.define(`neoris-mail`, NeorisMail);