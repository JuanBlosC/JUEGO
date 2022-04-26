function operacion(){
    var n1=parseFloat(document.MyForm.sospechoso.value);
    var cul='La psicopata es la modelo 3'
    if (n1==3){
        var rta='Correcto, juzgaste bien'
    }
    if (n1==1||n1==2){
        var rta='Incorrecto, juzgaste mal'
    }
    if (n1!=1&&n1!=2&&n1!=3){
        var rta='Ingresa una de las opciones validas'
    }
    resul1=document.getElementById("resultado1");
    resul2=document.getElementById("resultado2");
    resul1.innerHTML=rta;
    resul2.innerHTML=cul;
}
