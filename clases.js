class SerVivo {
    constructor(numeroPatas, camina, respira,) {
        this.numeroPatas = numeroPatas;
        this.camina = camina;
        this.respira = respira;
    }
}

 class Humano extends SerVivo {
    constructor(numeroPatas, camina, respira, nombre, apellido, edad) {
        super(numeroPatas, camina, respira)
        this.nombre = nombre
        this.apellido = apellido;
        this.edad = edad
    }
    pensar(nombreHumano){
        return `${nombreHumano} esta pensando en cualquier cosa`;
    }
}

class Usuario extends Humano{
    constructor(numeroPatas, camina, respira, nombre, apellido, edad, email, id){
        super(numeroPatas, camina, respira, nombre, apellido, edad);
        this.email = email;
        this.id = id;
    }
}
const brayan = new Humano(2, true, true, "Brayan", "Gutierrez", 27)
const camilo = new Humano(2, true, true, "camilo", "Ramirez", 25)
const andrea = new Humano(2, true, true, "andrea", "Lopez", 19)
const pablo = new Humano(2, true, true, "pablo", "Escobar", 33)


const personas = [brayan, camilo, andrea, pablo]

const persona = {
    edad: 22,
    nombre: "brayan",
    apellido: "Gutierrez"
} 

//  console.log(brayan.pensar("Brayan"));

 personas.forEach((persona, index)=>{
    if(persona.nombre === "Cristian"){
        // console.log(personas[index]);
    }else{
        // console.log("No se enontro al usuario");
    }
})


export default Usuario
