
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const nome = document.getElementById("nome").value;
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;
  
      if (nome && data && hora) {
        alert("Aula agendada com sucesso!\n\nAluno: " + nome + "\nData: " + data + "\nHora: " + hora);
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  
    //  botao voltar
    document.getElementById("btnVoltar").onclick = function () {
      history.back(); //volta a pagina anterior se tiver
    };
  
    