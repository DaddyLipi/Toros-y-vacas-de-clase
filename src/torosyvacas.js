class TorosVacas{
    constructor(codSecreto){
        this.codSecreto = codSecreto;
    }
    adivinar(intento){
        let Mensaje = "";
        if(intento === this.codSecreto){
            Mensaje= "ganaste";
        }
        else
        {
            for(let i=0;i<this.codSecreto.length;i++)
            {
                if(this.codSecreto.includes(intento[i]))
                {
                    Mensaje = Mensaje + "*";
                }
            }   
        }

        return Mensaje;
    } 
}

export default TorosVacas; 