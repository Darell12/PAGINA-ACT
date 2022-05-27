const espacio = document.querySelector("#espacio")
console.log(espacio);

const formulario1 = document.querySelector("#FuncionesSEC");
console.log(formulario1);

formulario1.addEventListener("submit", function (e) {
    e.preventDefault();

    const N1 = document.querySelector("#opc").value;



    if (parseInt(N1) === 1) {
        opcion1();
    } else if (parseInt(N1) === 2) {
        opcion2();
    } else if (parseInt(N1) === 3) {
        opcion3();
    }
})


function opcion1() {

    //CREO FORMULARIO//

    var formC = document.createElement("form");
    formC.setAttribute("id", "formulario-creado");
    //conteido
    //elemto del que es hijo
    espacio.appendChild(formC);

    //Ubico el formulario una vez creado
    formC = document.querySelector("#formulario-creado");
    console.log(formC);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese uno de los lados del cuadrado";
    formC.appendChild(label);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC.appendChild(boton);


    //PREVENGO EL REFRESH//
    formC.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;

        //PROCESO

        let superficie = parseFloat(N1) * (N1);

        salida = document.createElement("p");
        salida.textContent = ("La superficie del cuadrado es: " + superficie);
        formC.appendChild(salida);

        //boton refresh//

        // Refresh = document.createElement("button");
        // Refresh.setAttribute("id","refresh");
        // formC.appendChild(Refresh);


    })
}

function opcion2() {

    var formC = document.createElement("form");
    formC.setAttribute("id", "formulario-creado");
    //conteido
    //elemto del que es hijo
    espacio.appendChild(formC);

    //Ubico el formulario una vez creado
    formC = document.querySelector("#formulario-creado");
    console.log(formC);

    //Br = document.createElement("br");
    //formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese 2 numeros";
    formC.appendChild(label);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input2 = document.createElement("input");
    Input2.setAttribute("type", "number");
    Input2.setAttribute("id", "N2");
    formC.appendChild(Input2);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input2 = document.querySelector("#N2")
    console.log(N2);



    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC.appendChild(boton);

    formC.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;
        const N2 = document.querySelector("#N2").value;

        let suma = Number(N1) + Number(N2);
        let prod = Number(N1) * Number(N2);

        salida = document.createElement("p");
        salida.textContent = ("La suma de los 2 números es: " + suma + " Y el producto es: " + prod);
        formC.appendChild(salida);

    })
}

function opcion3() {

    var formC = document.createElement("form");
    formC.setAttribute("id", "formulario-creado");
    //conteido
    //elemto del que es hijo
    espacio.appendChild(formC);

    //Ubico el formulario una vez creado
    formC = document.querySelector("#formulario-creado");
    console.log(formC);

    //Br = document.createElement("br");
    //formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese el precio de los productos a llevar";
    formC.appendChild(label);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    Br = document.createElement("br");
    formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese la cantidad de productos a llevar";
    formC.appendChild(label);

    Br = document.createElement("br");
    formC.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N2");
    formC.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC.appendChild(boton);


    //PROCESO//

    formC.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;
        const N2 = document.querySelector("#N2").value;

        let total = Number(N1) * Number(N2);

        salida = document.createElement("p");
        salida.textContent = ("El total a pagar es de: $" + total);
        formC.appendChild(salida);

    })

}


let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
    location.reload();
})

// Refresh = document.createElement("input");
// Refresh.setAttribute("type","submit");
// Refresh.setAttribute("id","refresh");
// formC.appendChild(Refresh);

///FUNCIONES R y C////////////////////////////////

const espacio2 = document.querySelector("#espacio2")
console.log(espacio2);

const formulario2 = document.querySelector("#Funciones2");
console.log(formulario2);

formulario2.addEventListener("submit", function (e) {
    e.preventDefault();

    const N1 = document.querySelector("#opc2").value;



    if (parseInt(N1) === 1) {
        opcion1R();
    } else if (parseInt(N1) === 2) {
        opcion2R();
    } else if (parseInt(N1) === 3) {
        opcion3R();
    } else if (parseInt(N1) === 4) {
        opcion4R();
    } else if (parseInt(N1) === 5) {
        opcion5R();
    } else if (parseInt(N1) === 6) {
        opcion6R();
    } else if (parseInt(N1) === 7) {
        opcion7R();
    } else if (parseInt(N1) === 8) {
        opcion8R();
    } else if (parseInt(N1 === 9)){
        opcion9R();
    }
})

///FUNCIONES///

function opcion1R() {

    //CREO FORMULARIO//

    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese 3 números";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N2");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N2")
    console.log(N1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N3");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N3")
    console.log(N1);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC2.appendChild(boton);


    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;
        const N2 = document.querySelector("#N2").value;
        const N3 = document.querySelector("#N3").value;

        //PROCESO

        if (parseInt(N1) < 10 && parseInt(N2) < 10 && parseInt(N3) < 10) {

            salida = document.createElement("p");
            salida.textContent = ("Todos los números son menores que 10");
            formC2.appendChild(salida);
        } else if (parseInt(N1) < 10 || parseInt(N2) < 10 || parseInt(N3) < 10) {

            salida = document.createElement("p");
            salida.textContent = ("Alguno de los números	es menor que 10");
            formC2.appendChild(salida);
        }
        //boton refresh//

        // Refresh = document.createElement("button");
        // Refresh.setAttribute("id","refresh");
        // formC.appendChild(Refresh);


    })



}


function opcion2R() {
    //CREO FORMULARIO//

    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese 3 números iguales";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N2");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N2")
    console.log(N1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N3");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N3")
    console.log(N1);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC2.appendChild(boton);


    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;
        const N2 = document.querySelector("#N2").value;
        const N3 = document.querySelector("#N3").value;

        //PROCESO

        if (parseInt(N1) === parseInt(N2) && parseInt(N1) === parseInt(N3)) {

            suma = Number(N1) + Number(N2);
            multi = suma * Number(N3)

            salida = document.createElement("p");
            salida.textContent = ("La suma de los 2 primeros es: " + suma + " Y la multiplicación por el 3° es: " + multi);
            formC2.appendChild(salida);
        } else {
            salida = document.createElement("p");
            salida.textContent = ("Los numeros deben ser iguales");
            formC2.appendChild(salida);
        }
        //boton refresh//

        // Refresh = document.createElement("button");
        // Refresh.setAttribute("id","refresh");
        // formC.appendChild(Refresh);


    })
}

function opcion3R() {
    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "¿Cuántos años ha trabajado?";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "Year");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#Year")
    console.log(Year);

    Br = document.createElement("BR");
    formC2.appendChild(Br);


    label = document.createElement("label");
    label.textContent = "¿Cuánto es su sueldo actual?";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "Sl");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("Sl")
    console.log(Sl);


    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC2.appendChild(boton);

    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const year = document.querySelector("#Year").value;
        const sueldo = document.querySelector("#Sl").value;

        //PROCESO

        if (parseInt(sueldo) < 500 && parseInt(year) > 10) {
            const aumento = (Number(sueldo) * 0.2);

            const sueldofinal = Number(aumento) + Number(sueldo);

            console.log(aumento);
            console.log(sueldofinal);

            salida = document.createElement("p");
            salida.textContent = ("Su nuevo sueldo sera de $" + sueldofinal);
            formC2.appendChild(salida);


        } else {
            if (parseInt(sueldo) < 500 && parseInt(year) < 10) {
                const aumento = (Number(sueldo) * 0.05);

                const sueldofinal = Number(aumento) + Number(sueldo);

                console.log(aumento);
                console.log(sueldofinal);
                salida = document.createElement("p");
                salida.textContent = ("Su nuevo sueldo sera de $" + sueldofinal);
                formC2.appendChild(salida);
            } else {
                if (parseInt(sueldo) > 500) {
                    salida = document.createElement("p");
                    salida.textContent = ("Su nuevo sueldo se mantiene en $" + sueldo);
                    formC2.appendChild(salida);
                    s
                }
            }
        }

        //boton refresh//

        // Refresh = document.createElement("button");
        // Refresh.setAttribute("id","refresh");
        // formC.appendChild(Refresh);


    })
}

function opcion4R() {

    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "Ingrese 3 números";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N1");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N1")
    console.log(N1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N2");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N2")
    console.log(N2);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "N3");
    formC2.appendChild(Input1);

    Input1 = document.querySelector("#N3")
    console.log(N3);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");

    formC2.appendChild(boton);

    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const N1 = document.querySelector("#N1").value;
        const N2 = document.querySelector("#N2").value;
        const N3 = document.querySelector("#N3").value;

        if (parseInt(N1) < parseInt(N2) && parseInt(N1) < parseInt(N3)) {

            salida = document.createElement("p");
            salida.textContent = ("El número de menor valor es: " + N1);
            formC2.appendChild(salida);

        } else if (parseInt(N2) < parseInt(N3) && parseInt(N2) < parseInt(N1)) {

            salida = document.createElement("p");
            salida.textContent = ("El número de menor valor es: " + N2);
            formC2.appendChild(salida);

        } else if (parseInt(N3) < parseInt(N2) && parseInt(N3) < parseInt(N1)) {
            salida = document.createElement("p");
            salida.textContent = ("El número de menor valor es: " + N3);
            formC2.appendChild(salida);
        }


        if (parseInt(N1) > parseInt(N2) && parseInt(N1) > parseInt(N3)) {
            salida = document.createElement("p");
            salida.textContent = ("El número de mayor valor es: " + N1);
            formC2.appendChild(salida);
        } else if (parseInt(N2) > parseInt(N3) && parseInt(N2) > parseInt(N1)) {
            salida = document.createElement("p");
            salida.textContent = ("El número de mayor valor es: " + N2);
            formC2.appendChild(salida);
        } else if (parseInt(N3) > parseInt(N2) && parseInt(N3) > parseInt(N1)) {
            salida = document.createElement("p");
            salida.textContent = ("El número de mayor valor es: " + N3);
            formC2.appendChild(salida);
        }
    })
}

function opcion5R() {

    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "¿Cuántos personas desea procesar?";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "personas");
    formC2.appendChild(Input1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");
    formC2.appendChild(boton);

    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const NP = document.querySelector("#personas").value;


        let i = 0;
        let suma = 0;
        console.log(NP);

        //Proceso Ejercicio 1 actividad 3//   
        while (i < NP) {
            i += 1;
            let AL = prompt("Ingrese la altura de las personas")
            suma += parseFloat(AL);
        }

        let promedio = suma / (NP);

        salida = document.createElement("p");
        salida.textContent = ("El proedio de las alturas ingresadas es: " + promedio);
        formC2.appendChild(salida);


    })
}

function opcion6R() {
    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "¿Cuántos personas desea procesar?";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "EM");
    formC2.appendChild(Input1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");
    formC2.appendChild(boton);

    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        const EM = document.querySelector("#EM").value;


        let i = 0;
        let mas = 0;
        let menos = 0;
        let importe = 0;
        console.log(EM);

        //Proceso //    
        while (i < EM) {
            i += 1;
            let sueldo = prompt("Ingrese el sueldo de uno de los empleados")
            importe += Number(sueldo);
            if (parseInt(sueldo) >= 100 && parseInt(sueldo) <= 300) {
                menos += 1;
            } else if (parseInt(sueldo) > 300) {
                mas += 1;
            }

        }

        salida = document.createElement("p");
        salida.textContent = ("El número de empleados que ganan entre 100$ y 300$ es:" + menos + " Y los que ganan mas de 300$ son: " + mas);
        formC2.appendChild(salida);

        salida2 = document.createElement("p");
        salida2.textContent = ("El importe en sueldos de los empleados es de: " + importe);
        formC2.appendChild(salida2);
    })
}

function opcion7R() {
    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");

    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        
    for (let i = 0; i < 25; i++) {

        let S = i * 11;
        
        //addElement(S);
        // console.log("-"+salida+"-");
      console.log(S)
        salida = document.createElement("label");
        salida.textContent = "-"+S;
        formC2.appendChild(salida);
    
    }
})
}


function opcion8R(){

    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");

    formC2.addEventListener("submit", function (e) {
        e.preventDefault();


    console.log("Ejericio 9 multiplos de 8")
    for (let i = 0; i < 64; i++) {

        let Z = i * 8;
        
        //addElement(Z);
        // console.log("-"+salida+"-")


        salida = document.createElement("label");
        salida.textContent = "-"+Z;
        form2C.appendChild(salida);
    }
    })
}

function opcion9R(){
    var formC2 = document.createElement("form");
    formC2.setAttribute("id", "formulario-creado2");
    //conteido
    //elemto del que es hijo
    espacio2.appendChild(formC2);

    //Ubico el formulario una vez creado
    formC2 = document.querySelector("#formulario-creado2");
    console.log(formC2);

    //  Br = document.createElement("br");
    // formC.appendChild(Br);

    label = document.createElement("label");
    label.textContent = "¿Cuántos personas desea procesar?";
    formC2.appendChild(label);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    Input1 = document.createElement("input");
    Input1.setAttribute("type", "number");
    Input1.setAttribute("id", "NP");
    formC2.appendChild(Input1);

    Br = document.createElement("BR");
    formC2.appendChild(Br);

    boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "enviar");
    formC2.appendChild(boton);

    //PREVENGO EL REFRESH//
    formC2.addEventListener("submit", function (e) {
        e.preventDefault();

        //Proceso //    
        const NP = document.querySelector("#NP").value;


        let i = 0;
        let pares = 0;
        let impares = 0;
        console.log(NP);
    
        //Proceso Ejercicio 5 actividad 3//   
        while (i < NP) {
            i += 1;
            let N = prompt("Ingrese un número")
         
            if (N % 2 == 0) {
                pares +=1;
            } else {
                impares +=1;
            }
    
        }

        salida2 = document.createElement("p");
        salida2.textContent = ("Los núeros pares fueron: " + pares+ " y los impares fueron: " +impares);
        formC2.appendChild(salida2);
    })
}



let refresh2 = document.getElementById("refresh2");
refresh2.addEventListener("click", _ => {
    location.reload();
})