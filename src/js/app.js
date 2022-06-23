//1ro capturamos el Nombre y Apellido por medio de promps
//OJO: Debe quedar guardado en algun lado 

const nombre = prompt ("Ingresa tu Nombre");
const apellido = prompt ("Ingresa tu Apellido");

const iniNombre = nombre.charAt (0).toUpperCase();
const iniApe = apellido.charAt (0).toUpperCase();

//Crear una etiqueta h2 con JS y la guardo en una constante llamada...Bienvenida
const bienvenida = document.createElement("h2")
//Ahora le inyecto el texto al h2 que llame bienvenida
bienvenida.textContent = `Bienvenido: ${iniNombre} ${iniApe}`

//Ahora como hago para evitar esto a la pagina web desde JS
const saludo = document.querySelector("#bienvenido")
//ahora despues de esto le incrusto el h2 o mejor le adiciono su HIJO
saludo.appendChild(bienvenida)
/*-----------------------------*/
// Crear el array vacio que va ir guardando mis productos
let listaP = [];
//Crear una funcion (Se puede reutilizar)
function guardar (){

    //-----2
    document.querySelector("#aviso").innerHTML=""
    //-----2

    const code = document.querySelector("#codigo").value;
    const pdt = document.querySelector("#producto").value;
    const price = parseInt (document.querySelector("#precio").value); //....3
    
    
        const producto = {
        codigo:code,
        producto:pdt,
        precio:price,
        iva:price*0.19,
        total:price+(price*0.19),
    }

    //parseInt (texto a convertir en numero)




    listaP = [ ... listaP,producto]
    console.table(listaP)

    const productoAviso = document.createElement("h3");
    productoAviso.textContent = `Acabas de ingresar el producto: ${producto.producto}`;
    const aviso = document.querySelector("#aviso");
    aviso.appendChild(productoAviso)
}
// .......1
//Borrado de Formulario
document.querySelector("#codigo").value="" ;
document.querySelector("#producto").value="" ;
document.querySelector("precio").value="" ;

//.......1


//Falta:
//1. Borrar el formulario cada que le damos guardar
//2. Que cada que ingresemos un producto, solo nos muestre... "Acbas de ingresar el producto" solo el ultimo
//3. Covertir los valores en precio en numeros para hacer calculo
//4. Con esos valores en numeros vamos a calcular el iva y guardarlo tambien en el objeto
//6. Asegurarse que las iniciales queden en mayuscula
//5. Incluir mas Css esto esta HORRIBLE!!



/*console.table(bienvenida)*/
/*console.log(iniNombre)
console.log(iniApe)*/