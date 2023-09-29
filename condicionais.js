/*let dinheiro = 8500
if(dinheiro >= 10000){
    alert ("partiu viajar!")

}else {
    alert("nao vou viajar")
}
*/



/*         
let n1 = prompt("digite sua nota:")
let n2 = prompt("digite sua nota: ")
let n3 = prompt("digite sua nota: ")

let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3

if(resultado >= 6){
    alert("sua nota foi" +resultado+" voce passou de ano" )
} else {
    alert("sua nota foi"+resultado+"voce foi aprovado")
}*/

/*
let n1 = prompt("digite um numero");
let n2 = prompt( "digite outro numero");
if(n1 > n2) {
    alert("o "+n1+" e maior que o "+n2);
}else {
    alert(n2+" e maior que "+n1);
}
*/
/*
let A = prompt("digiti um valor");
let B = prompt("digiti um valor");
let C = prompt("digiti um valor");
let D = prompt("digiti um valor");

if(B > C && D > A && C + D > A + B && C > 0 && D > 0 ) {
    alert("valores aceitos")
}

else{
alert("valores nao aceitos")
 }  */

/* 
 
 let nascimento = prompt("digite o ano de nascimento");// 1995

 let idade =  2023 - nascimento 


 if(idade >=18 && idade <= 65 ){
    alert( "você tem "+idade+" e o voto e obrigatorio")
 }else{
alert("você tem "+idade+" e o voto é opcional")
 } */

/*
 let n1 = prompt("digite sua nota:")
let n2 = prompt("digite sua nota: ")
let n3 = prompt("digite sua nota: ")

let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3
if(resultado >=6){
    alert ("sua media é"+Math.round(resultado ))

}
else if(resultado >=4&&resultado<=5){
alert("sua nota foi "+resultado+" voce esta de recuperação")
}
else{
    alert("sua nota foi"+resultado+"voce foi reprovado")
}*/


/*
let nivel = prompt ("qual seu nivel");


if(nivel==1){
    let horas = prompt ("quantas horas trabalhadas");

    let salario = parseInt(horas)*12
    alert("o professor recebe"+salario)

} else if(nivel==2){
    let horas = prompt ("quantas horas trabalhadas");

    let salario = horas*17
    alert("o professor recebe"+ salario)
}else if(nivel==3){
    let horas = prompt ("quantas horas trabalhadas");

    let salario = horas*25
    alert("o professor recebe"+ salario);
}
 else{
    alert("codigo invalido");
 }   */

 let  peso= prompt("qual e seu peso")
 let altura= prompt("qual e sua altura")
 let resultado = (peso/altura*altura)
 if( resultado < 18.5){
    alert("vc esta abaixo do peso "+resultado)
 }else  if(resultado >= 18.5 && resultado <= 24.9){
    alert("peso normal"+ resultado)
 }else if( resultado >24.9 && resultado < 29.9){
    alert("acima do peso "+ resultado)
 }else if( resultado >24.9 &&  resultado < 34.9){
    alert("obesidade grau 1"+ resultado)
 }else if ( resultado > 34.9 && resultado < 39.9){
    alert("obesidade grau 2"+ resultado)  
 }else if(resultado >39.9){
    alert("obesidade grau3"+ resultado)
 }if("codigo invalido")