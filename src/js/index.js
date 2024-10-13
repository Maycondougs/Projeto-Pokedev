const listaSelecaoPokedevs =document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        EscondeCartaoPokedev();

        const idPokedevSelecionado = MostrarCartaoPokedev(pokedev);

        DesativarPokedevNaListagem();

        AtivarClassAtivoPokedev(idPokedevSelecionado);

    })
})

function AtivarClassAtivoPokedev(idPokedevSelecionado) {
    const pokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNalistagem.classList.add("ativo");
}

function DesativarPokedevNaListagem() {
    const pokedevAtivoNalistagem = document.querySelector(".ativo");
    pokedevAtivoNalistagem.classList.remove("ativo");
}

function MostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedeParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedeParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function EscondeCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
