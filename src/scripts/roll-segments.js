const allSegments = [
  {
    prefix: 'suas',
    name: 'Roupas',
    color: '#008181'
  },
  {
    prefix: 'seus',
    name: 'Achadinhos',
    color: '#4303f5'
  },
  {
    prefix: 'suas',
    name: 'Ofertas',
    color: '#20a011'
  },
  {
    prefix: 'seus',
    name: 'Eletrônicos',
    color: '#e137ff'
  },
  {
    prefix: 'suas',
    name: 'Makes',
    color: '#9333ea'
  },
]

function rollSegments() {
  let prefix = document.querySelector('#prefix')
  let name = document.querySelector('#name')

  let currentIndex = 0 // Índice inicial
  const interval = 2000 // Tempo em milissegundos
  const totalSegments = allSegments.length // Total de segmentos

  // Função para atualizar os elementos na página
  function updateSegments() {
    const segment = allSegments[currentIndex] // Segmento atual
    prefix.innerHTML = segment.prefix // Atualiza o prefixo
    name.innerHTML = segment.name // Atualiza o nome

    name.style.color = segment.color

    triggerAnimation(name);

    currentIndex = (currentIndex + 1) % totalSegments // Próximo índice (volta ao início no final)
  }

  function triggerAnimation(element) {
    element.classList.remove('fadeInUp-animation'); // Remove a classe
    void element.offsetWidth; // Força o reflow para reiniciar a animação
    element.classList.add('fadeInUp-animation'); // Adiciona novamente a classe
  }

  // Chama a função a cada intervalo
  setInterval(updateSegments, interval)

  // Opcional: imprime os nomes no console ao iniciar
  allSegments.forEach((segment) => {
    console.log(segment.name)
  })
}


