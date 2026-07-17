//EJERCICIO 1

function n_Mayor(){
    let n1;
    let n2;
    
    n1 = Math.floor((Math.random()*100)+1);
    n2 = Math.floor((Math.random()*100) + 1);
    
    if(n1 == n2){
        console.log(n1+ " es igual a " +n2);
    }else if( n1 < n2){
        console.log(" N2 "+n2 + " es mayor");
    }else{
        console.log(" N1 " + n1 + " es mayor");
    }
    
}

n_Mayor();

//EJERCICIO 2


function eroAlcinco(){
    let n;
    let i=0;
    do{
    
    n= Math.floor((Math.random()*6));
    
    console.log("n = " + n);
    i++;
    }while(n != 0);
    
    console.log(" salio despues de "+ i + " intentos")
}

eroAlcinco();

//EJERCICIO 3

function tablaMult(){
 
    let n;
    do{   
     n = Math.floor(Math.random()*11);
    }while(n <= 1);
    
    
    for(let i=1 ; i < 11 ; i++){
        let res = n*i;
        console.log(n + " x " + i + " = " + res)
    }
}

tablaMult();

//EJERCICIO 4

function pedirParInpar() {

    let num = prompt("dame un numero del 1 - 100");
    
    for(let i = 1; i<= num; i++){
        if(i % 2 == 0){
        console.log(i +" es par");
        }else{
            console.log(i + " es inpar");
        }
    }
}

pedirParInpar();

//EJERCICIO 5

function comision(){
    let cantidad =0;
    let total = 0;
    
    do{
        cantidad = Number(prompt("ingresa cantidad de venta"));
        total += cantidad; 
      
    }while( cantidad >= 5000 && cantidad <= 30000 );
    
    if (total <= 10000){
        total *= 0.10
    } else if (total >= 10000){
        total *= 0.15
    }
   console.log( "el total es "+ total)
}

comision();