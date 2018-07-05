/*O objeto a seguir é uma estufa ou aquecedor, com a marca,a temperatura minima,
e os niveis de temperatura cada um com uma a potencia a serem informados, além de possuir 
o estado de ligado e desligado.
o usuario pode consultar as informacoes do aquecedor,alem de aumentar ou baixar a temperatura*/

const aquecedor = new aquecedor('brastemp', 750, 5);


/*Métodos:
aquecedor.on
aquecedor.off
aquecedor.potencia(do nivel de temperatura)
aquecedor.marca
aquecedor.minimo(nivel 1)
aquecedor.maximo(nivel 5)
aquecedor.aumentatemperatura
aquecedor.baixatemperatura
aquecedor.nivel
*/

aquecedor.on()
console.log( aquecedor.potencia === 750)
console.log( aquecedor.nivel === 1)


aquecedor.aumentatemperatura()
console.log( aquecedor.on === true)
console.log( aquecedor.potencia ===  1125)   //Tem que somar metade da potencia minima
console.log( aquecedor.nivel === 2)

console.log( aquecedor.nivel === 5)
console.log( aquecedor.potencia ===  2250)
aquecedor.aumentatemperatura() //Nao deveria funcionar

console.log( aquecedor.nivel === 1)
aquecedor.baixatemperatura()
console.log( aquecedor.off === true)
console.log( aquecedor.on === false)




const aquecedor = new aquecedor('brastemp', 200, 3);

aquecedor.on()
console.log( aquecedor.potencia === 200)
console.log( aquecedor.nivel === 1)

aquecedor.aumentatemperatura()
console.log( aquecedor.on === true)
console.log( aquecedor.potencia ===  300)   
console.log( aquecedor.nivel === 2)

aquecedor.maximo()
console.log( aquecedor.potencia ===  400)

