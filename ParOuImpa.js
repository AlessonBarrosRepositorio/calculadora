function ParOuImpa(){
    var num1 = window.document.getElementById("numero1");
    
    var res = window.document.getElementById("resposta");

    n1 = parseInt(num1.value);    

    media = n1 % 2;

    if(media == 0){
        res.innerHTML = 'PAR';
    }
    else if(media == 1){
        res.innerHTML = 'IMPAR';
    }
    else{
        res.innerHTML = 'Insira um valor antes de começar.';
    }
    
}
function soma(){
    //pegando_valor();
    
    var num1 = window.document.getElementById('opera1');
    var num2 = window.document.getElementById('opera2');
    var res = window.document.getElementById('resposta2');    
    

    var n1 = Number(num1.value);
    var n2 = Number(num2.value);  
    var resul = (n1 + n2);
    res.innerHTML = `${n1} + ${n2} = ${resul}`; 
}
function subtracao(){
    var num1 = window.document.getElementById('opera1');
    var num2 = window.document.getElementById('opera2');
    var res = window.document.getElementById('resposta2');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);  
    var resul = (n1 - n2);
    res.innerHTML = `${n1} - ${n2} = ${resul}`;
}
function multiplicacao(){
    var num1 = window.document.getElementById('opera1');
    var num2 = window.document.getElementById('opera2');
    var res = window.document.getElementById('resposta2');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);  
    var resul = (n1 * n2);
    res.innerHTML = `${n1} x ${n2} = ${resul}`;
}
function divisao(){
    var num1 = window.document.getElementById('opera1');
    var num2 = window.document.getElementById('opera2');
    var res = window.document.getElementById('resposta2');    
    
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);   
    if(n1 == 0 && n2 == 0 || n2 == 0){
        res.innerHTML = 'Insira um valor real.'
    }else{
        var resul = (n1 / n2);
        res.innerHTML = `${n1} ÷ ${n2} = ${resul}`;
    }
    
}

//quero transformar isso em função que eu possa chamar  dentro de outras funcões.
/*function pegando_valor(){
    var num1 = window.document.getElementById('opera1');
    var num2 = window.document.getElementById('opera1');
    var res = window.document.getElementById('resposta2');
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);

    return res, n1, n2;
}*/