// let nome =prompt();
// console.log(nome);

// let num1= parseInt(prompt("Digite um numero:"));
// let num2= parseInt(prompt("Digite um numero:"));
// console.log(num1 +num2);
// console.log(num1 -num2);
// console.log(num1 *num2);
// console.log(num1 /num2);

//EstruturaSequencial:

//Ex1:
// let nome = prompt("Escreva seu nome:");
// alert("Seu nome eh "+nome);
// console.log(nome);
// console.log(alert);


//Ex2:
// let num1 = parseInt(prompt("Digite um numero:"));
// let num2 = parseInt(prompt("Digite um numero:"));
// console.log("A soma dos numeros eh: " (num1 + num2));


//Ex3:
// let nota1 = parseFloat(prompt("Digite a primeira nota:"));
// let nota2 = parseFloat(prompt("Digite a segunda nota:"));
// console.log("A media eh : " +(nota1 + nota2)/2);


//Ex4:
// let anoNasci = parseInt(prompt("Digite seu ano de Nascimento:"));
// dataAtual = new Date();
// anoAtual= dataAtual.getFullYear();
// console.log(anoAtual - anoNasci)

//Ex5:
// let salarioHora= parseFloat(prompt("Quanto voce ganha por hora?"));
// let horaTrabalho= parseInt(prompt("Quantas horas voce trabalha?"));
// dt = new Date();
// month = dt.getMonth();
// year = dt.getFullYear();
// daysInMonth = new Date(year, month, 0).getDate();
// let total =(salarioHora*(horaTrabalho*daysInMonth))
// console.log(total+"R$");

//Ex6:
// let F = parseFloat(prompt("Qual a temperatura em graus Fahrenheit:"))
// console.log("Graus Celsius "+((F-32) / 9)*5);

//EstruturaDeDecisao

//Ex1:
// let num1 = parseInt(prompt("Digite o primeiro numero:"));
// let num2 = parseInt(prompt("Digite o segundo numero:"));
// if (num1>num2) {
//     console.log("O primeiro numero eh maior: "+ num1)
// }else if (num2>num1) {
//     console.log("O segundo numero eh maior: "+ num2)
// }else{
//     console.log("Os numeros sao iguais")
// }

//Ex2:
// let num1 = parseInt(prompt("Digite um numero:"));
// if (num1>=0) { 
//     console.log("numero eh positivo");
// }
// else{
//     console.log("numero eh negativo");
// }

//Ex3:
// let letra=prompt("Digite F(female) ou M(male):").toLowerCase();
// if (letra ==="f") {
//     console.log("Feminino");
// }
// else if (letra ==="m") {
//     console.log("Masculino");
// } else {
//     console.log("Sexo invalido");
// }

//Ex4:
// let nota1=parseFloat(prompt("Digite a primeira nota:"));
// let nota2=parseFloat(prompt("Digite a segunda nota:"))
// let media=((nota1+nota2)/2);
// if (media>=7 && media<10) {
//     console.log("Aprovado")
// }else if (media<7) {
//     console.log("Reprovado")
// }else if (media===10) {
//     console.log("Aprovado com distincao")
// }

//Ex5:
// let n1=parseInt(prompt("Digite um numero:"));
// let n2=parseInt(prompt("Digite um numero:"));
// let n3=parseInt(prompt("Digite um numero:"));
// if (n1>n2 && n2>n3 &&n1>n3) {
//     console.log("O maior eh: "+n1+" e o menor eh: " +n3);
// }else if (n1>n2 && n3>n2 && n1>n3) {
//     console.log("O maior eh: "+n1+" e o menor eh: " +n2); 
// }else if (n2>n1 && n1>n3 &&n2>n3)  {
//     console.log("O maior eh: "+n2+" e o menor eh: " +n3);
// }else if (n2>n1 && n3>n1 && n2>n3) {
//     console.log("O maior eh: "+n2+" e o menor eh: " +n1);
// }else if (n3>n1 && n1>n2 && n3>n2) {
//     console.log("O maior eh: "+n3+" e o menor eh: " +n2);
// }else if (n3>n1 && n2>n1 && n3>n2)  {
//     console.log("O maior eh: "+n3+" e o menor eh: " +n1);
// }

// Ex6:
// let num1 = parseInt(prompt("Digite um numero:"));
// let num2 = parseInt(prompt("Digite um numero:"));
// if (num1%2===0) { (o uso de  tres =(===) compara inclusive o tipo)
//     console.log("numero eh par");
// }
// else{
//     console.log("numero eh impar");
// }
// if (num2%2===0) { (o uso de  tres =(===) compara inclusive o tipo)
//     console.log("numero eh par");
// }
// else{
//     console.log("numero eh impar");
// }