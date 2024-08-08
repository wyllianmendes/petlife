var elementosDuvida = document.querySelectorAll('.duvida')
var elementosFoto = document.querySelectorAll('.foto')

elementosDuvida.forEach(function (duvida, indice) {
    duvida.addEventListener("click", () => {

        if (elementosDuvida[indice].classList == 'duvida ativa') {
            duvida.classList.remove('ativa')
        } else {
            for (var y = 0; y <= 3; y++) {
                elementosDuvida[y].classList.remove('ativa')
            }
            elementosDuvida[indice].classList.add('ativa')
        }

        if (elementosDuvida[indice].classList == 'duvida ativa') {
            for (var y = 0; y <= 4; y++) {
                elementosFoto[y].classList.remove('selecionada')
            }
            elementosFoto[indice + 1].classList.add('selecionada')
        } else {
            for (var y = 0; y <= 4; y++) {
                elementosFoto[y].classList.remove('selecionada')
            }
            elementosFoto[0].classList.add('selecionada')
        }
        
        // Segundo método da mudança de imagem abaixo: 
        // if (elementosDuvida[indice].classList == 'duvida'){
        //     mudarFoto()
        //     elementosFoto[0].classList.add('selecionada')
        // } else {
        //     mudarFoto()
        //     elementosFoto[indice + 1].classList.add('selecionada')
        // }
    })
})

// Função do segundo método:
// function mudarFoto() {
//     const imagemSelecionada = document.querySelector('.foto.selecionada')
//     imagemSelecionada.classList.remove('selecionada')
// }