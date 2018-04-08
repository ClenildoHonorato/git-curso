// document.getElementById("teste").addEventListener('click', function(){
//     document.getElementById("foto").src="imagem2.jpg";
// });
document.getElementById("log").addEventListener("submit", function(){
    console.log("getElementById(log)");

    var usus = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    console.log('usuario ', usus);
    console.log('senha ', senha)

     if(usus == "Clenildo" && senha == 123){
         alert("Login efetuado com sucesso.")
     }else{
         alert("Usuario não cadastrado")
     }
     
});