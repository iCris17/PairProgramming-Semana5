function sumaDivisores(n){
    let suma = 0;

    for(let i = 1; i < n; i++){

        if(n % i == 0){
            suma = suma + i;
        }
    }

    return suma;

}

console.log(sumaDivisores(220));

function buscandoAmigos(m){
    let numerosAmigos = [];
    for(let i = 1; i <= m; i++){//284
        let suma1 = 0;
        let suma2 = 0;
        for(let j = 1; j < i; j++){
            if(i % j == 0){
                suma1 = suma1 + j;//220
            }  
        }
        for(let k = 1; k < suma1; k++){
            if(suma1 % k == 0){
                suma2 = suma2 + k;//284
            }
        }
        if(i === suma2 && suma1 !== suma2){
            if (numerosAmigos.map(x => x.numero).indexOf(i) === -1){
                numerosAmigos.push({
                    numero: suma1,
                    numeroAmigo: suma2
                });
            }
        }
    }

    return numerosAmigos;
}

console.log(buscandoAmigos(5000));