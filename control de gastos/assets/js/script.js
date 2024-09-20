let listanombregastos = [];
let listavaloresgastos = [];


function clickBoton() {
    let nombregasto = document.getElementById("nombreGasto").value;
    let valorgasto =  document.getElementById("valorGasto").value;

    console.log(nombregasto);
    console.log(valorgasto);
    
    listanombregastos.push(nombregasto);
    listavaloresgastos.push(valorgasto);

    console.log(listavaloresgastos)
    console.log(listanombregastos)

    //alert("click del ususario");
    actualizarlistadegastos();
} 

function actualizarlistadegastos (){
   const listaElementos = document.getElementById("listaDeGastos")
   const totalelementos = document.getElementById("totalGastos")

    let htmllista = ''; 
    let totalgastos = 0;

    listanombregastos.forEach((elemento,posicion) => {
        const valorGasto =Number(listavaloresgastos[posicion]);
        
        
        htmllista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
                    <button  onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        //calcular el total de gastos   
        totalgastos += Number(valorGasto);
        console.log(valorGasto);
    });

    listaElementos.innerHTML = htmllista;
    totalelementos.innerHTML =totalgastos.toFixed(2);
    limpiar();

}

function limpiar(){
   document.getElementById("nombreGasto").value = " ";
    document.getElementById("valorGasto").value =" ";
}

function eliminarGasto (posicion) {
    listanombregastos.splice(posicion,1);
    listavaloresgastos.splice(posicion,1);
    actualizarlistadegastos();
}