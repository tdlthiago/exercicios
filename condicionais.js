/*let dinheiro = 8500
if(dinheiro >= 10000){
    alert ("partiu viajar!")

}else {
    alert("nao vou viajar")
}
*/



let n1 = prompt("digite sua nota:")
let n2 = prompt("digite sua nota: ")
let n3 = prompt("digite sua nota: ")

let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3

if(resultado >= 6){
    alert("sua nota foi" +resultado+" voce passou de ano" )
} else {
    alert("sua nota foi"+resultado+"voce foi aprovado")
}
