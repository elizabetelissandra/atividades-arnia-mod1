function aparecerResposta(){
    
    let perguntas = document.querySelectorAll('.pergunta')
    
        perguntas.forEach(pergunta => {
        pergunta.addEventListener("click", ()=>{
        pergunta.classList.toggle("ativado");
})})}