// 1. Definindo a dimensão do jogo >  altura e largura

var altura = 0
var largura = 0
var vida = 1
var tempo = 15 
var nivel1 = window.location.search
nivel1 = nivel1.replace('?', '')
var mosquitoveloz = 1500

if (nivel1 === 'easy') {
    mosquitoveloz = 1500
} else if (nivel1 === 'medium') {
    mosquitoveloz = 1000
} else if (nivel1 === 'fuckinghard') {
    mosquitoveloz = 700
}


// Agora sempre que o usuario diminuir ou aumentar a tela a cada atualização  > onresize e adicionar no body

function ajustarTamanho () {
altura = window.innerHeight
largura = window.innerWidth

console.log(largura, altura)
}

// 2. Criar posições randômicas, este metodo cria valores que vão de 0 > 1
// largura = posiçãoX   altura = posiçãoY
// aqui trazemos a função só para nos apoiar com os valores das variaves largura e altura

ajustarTamanho()  

// cronometro do jogo
 var cronometro = setInterval(function() {

    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
       clearInterval(mosquito)
       window.location.href = 'vitoria.html'
    
    } else {
        document.getElementById('cronometro').innerHTML = 'Tempo restante ' + tempo

    }
    
}, 1000) 


function posiçãoRandomica() {

if (document.getElementById('mosquitoaut')) {
    document.getElementById('mosquitoaut').remove()

    if (vida <= 3) {
        var pvida = document.getElementById('v' + vida)
        pvida.src = "imgs/coracao_vazio.png"
        vida++
    } else {
      window.location.href = 'gameover.html'
    }
}

var posiçãoX = Math.floor(Math.random() * largura) - 150
var posiçãoY = Math.floor(Math.random() * altura) - 200

//Usamos operadores ternarios sendo que caso o mosquito seja menor que 0, ele vai sair da area visivel do usuario
posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

console.log(posiçãoX, posiçãoY)

// 3. Criar o elemento de forma programatica > createElement
// adicionar um filho ao body atraves de appendChild

var mosquito = document.createElement("img")
mosquito.src = "imgs/mosquito.png"
mosquito.className = `${mudarTamanho()} ${mudançaLados()}` // demos para o novo elemento a mesma classe de CSS

//aqui começamos a mexer na parte de CSS na tela
mosquito.style.left = posiçãoX + 'px'  
mosquito.style.top = posiçãoY + 'px'
mosquito.style.position = 'absolute'  // é necessario que sejam absoluto
mosquito.id = 'mosquitoaut'
document.body.appendChild(mosquito)
mosquito.onclick = function() {
    this.remove()
}

console.log(mudarTamanho())
console.log(mudançaLados())
}

// 4. Tamanhos randomicos, gerei numeros aredondados até (3), sendo que vou gerar 3 tamanhos
function mudarTamanho() {
    var tamanho = Math.floor(Math.random() * 3)
    
    console.log(tamanho)
    switch (tamanho) {
    case 0:
        return 'mosquito1'
    case 1:
        return 'mosquito2'
    case 2: 
        return 'mosquito3'
    }
}

// 5. Vamos a dar mais efeitos dinamicos aos mosquitos, como por exemplo trocar de lados usando CSS

function mudançaLados() {
    var lado = Math.floor(Math.random() * 2)
    
    switch (lado) {
    case 0:
        return 'ladoA'
    case 1:
        return 'ladoB'
    }
}

// 6. criar uma função setInterval para que o elemento seja criado automaticamente

//7. vamos a criar um cenario e um painel no canto inferior esquero com os pontos de vida e um cronometro



// Reiniciar jogo desde gameover.html e vitoria.html
function reiniciarJogo() {
    window.location.href = "index.html"
}

/*8. Por ultimo criamos uma nova paginahtml que vai ser utilizada para escolher a dificuldade do jogo,
mas para isto precisamos recuperar os valores quando demos click no botão  */

// com o metodo location.search vamos pegar o nivel do usuario reemplazando o signo interrogatorio e armazenamos essa variavel

// com esta função vamos extrair o valor do nivel que o usuario esta seleccionando
function startGame() {
    var nivel = document.getElementById('etiquetas').value

    
    if (nivel === '') {
        alert ('Seleccione uma dificuldade')
    } 

    window.location.href = 'app.html?' + nivel
}