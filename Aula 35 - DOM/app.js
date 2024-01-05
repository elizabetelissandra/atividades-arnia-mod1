
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault() 

    const codigo = document.querySelector("#codigo").value
    const nome = document.querySelector("#nome").value
    const preco = document.querySelector("#preco").value
    const quantidade = document.querySelector('#quantidade').value
    const categoria = document.querySelector('.categoria').value
    const resultado = preco * quantidade

    // if(codigo == '' || nome == '' || preco == '' || quantidade == '' || categoria == ''){
    //     codigo.classList.add(vermelho)
    //     nome.classList.add(vermelho)
    //     preco.classList.add(vermelho)
    //     quantidade.classList.add(vermelho)
    //     categoria.classList.add(vermelho)
    // }else{
    //     codigo.classList.add(verde)
    //     nome.classList.add(verde)
    //     preco.classList.add(verde)
    //     quantidade.classList.add(verde)
    //     categoria.classList.add(verde)
    // }

    document.querySelector('.resultado').innerHTML = 
        `
         <h2 class='titulo-resultado'>#${codigo} - ${nome}</h2>
         <div class='div-pai'>
         <div class='cate'><div>Categoria</div> <div> ${categoria}</div></div>
         <div class='cate'><div>Preço</div> <div>${preco}</div></div>
         <div class='cate'><div>Quantidade</div>  <div>${quantidade}</div></div>
         <h3 class='resultado-final'>R$ ${resultado}</h3>
         </div>
         `
})
    