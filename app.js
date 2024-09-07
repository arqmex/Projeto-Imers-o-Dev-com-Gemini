function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p class='empty'>Por favor digite o nome de uma locomotiva</p>";
    return;
}

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = ""; 
   
  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
            
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa)){ 
          // cria um novo elemento
          resultados += `
          <div class="item-resultado">
              <h2>
                  <a target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
          </div>
      `;
      }
  }

  if (!resultados) {
      resultados = "<p class='notfound'>Nada foi encontrado</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}