<<<<<<< HEAD
document.querySelector("form").addEventListener("submit", function (event) {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const metas = document.getElementById("metas").value.trim();
  const historico = document.getElementById("historicoSaude").value.trim();
// Verifica campos vazios
=======
  // Função para validar e enviar o formulário
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // 
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const metas = document.getElementById("metas").value.trim();
    const historico = document.getElementById("historico").value.trim();

    // Verifica campos vazios
>>>>>>> 2cdb70c94195ee8d04feaed55e0ad83eb644e5e0
    if (!nome ||!telefone|| !cpf || !idade || !endereco  || !metas || !historico) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Simulando o envio 
    alert("Cadastro realizado com sucesso!");

    // Limpa o formulário
    this.reset();
  });

  // Botão SAIR volta para a página inicial
  document.querySelector(".btn-sair").addEventListener("click", function () {
    history.back();
  });