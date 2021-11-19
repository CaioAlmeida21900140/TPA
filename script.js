const calcular = document.getElementById('calcular');


function corrida () {
    const tempo_percorrido = document.getElementById('tempo percorrido').value;
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo');

   
    
       

        resultado.textContent = `Olá, ${nome}! voce percorreu ${tempo_percorrido}kg. Isso quer dizer que a sua velocidade média foi de ${tempo}`;

    
        
    

}
calcular.addEventListener('click', corrida);