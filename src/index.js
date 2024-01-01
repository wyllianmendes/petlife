var elementosDuvida = document.querySelectorAll('.duvida')
var elementosFoto = document.querySelectorAll('.foto')

elementosDuvida.forEach(function (duvida, indice) {
    duvida.addEventListener('click', function () {
        console.log(elementosDuvida[indice].classList)

        if (elementosDuvida[indice].classList == 'duvida ativa') {
            duvida.classList.remove('ativa')
        } else {
            for (var y = 0; y <= 3; y++) {
                elementosDuvida[y].classList.remove('ativa')
            }
            duvida.classList.add('ativa')
        }
        if (elementosDuvida[indice].classList == 'duvida') {
            removerImagem()
            elementosFoto[0].classList.add("selecionada")
        } else {
            removerImagem()
            elementosFoto[indice + 1].classList.add("selecionada")
        }

    })

})

function removerImagem() {
    const imagemSelecionada = document.querySelector(".foto.selecionada")
    imagemSelecionada.classList.remove("selecionada")

}


