const p = document.createElement(`template`);

p.innerHTML = `
<input type="password" id="idPass" placeholder="Ingrese su contraseña" />
`;

class NeorisPassword extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode : `open`});
        this._shadowRoot.appendChild(p.content.cloneNode(true));

        var pass = this._shadowRoot.querySelector(`input`);
        pass.type="password";
        neorisP.input = pass;

       
        
    }


    

    //.replace(/[a-zA-Z]/,"x");

}
window.customElements.define(`neoris-password`, NeorisPassword);