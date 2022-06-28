function validar_campo(){
    let documento=document.getElementById("numero_documento").value;
    let documento_auxiliar=Array.from(documento);
    let numeros="0123456789-";
    let ultimo=documento_auxiliar[documento_auxiliar.length-1];
    let bandera=numeros.search(ultimo);
    if(bandera<0){
        documento_auxiliar.pop();
        documento=documento_auxiliar.join("");
        console.log(documento);
        document.getElementById("numero_documento").value=documento;
    }else if(ultimo==="-"){
        console.log("- encontrado")
    }

}