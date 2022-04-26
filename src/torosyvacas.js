class TorosVacas{
    constructor(codSecreto){
        this.codSecreto = codSecreto;
    }
    adivinar(intento){
        let Mensaje;
        if(intento === this.codSecreto){
            Mensaje= "ganaste";
        }
        else
        {
            if(this.codSecreto.includes(intento[0]))
            {
                Mensaje= "*";
            }
            else{
                Mensaje = "";
            }
        }
        return Mensaje;
    } 
}

export default TorosVacas; 