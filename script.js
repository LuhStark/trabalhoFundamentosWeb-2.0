document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Verifica se todos os campos estão preenchidos corretamente
    if (validateForm()) {
      showConfirmation(); // Exibe a tela de confirmação
      document.getElementById("myForm").reset(); // Limpa os campos do formulário
      setTimeout(function(){
        window.location.href = "index.html"
      },10000);
    }
  });

  function validateForm() { // Irá validar as informações
    var nome = document.getElementById("nome").value;
    var motivo_contato = document.getElementById("motivo_contato").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;

    if (nome === "" || email === "" || motivo_contato === "" || celular === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    document.getElementById("nome2").value = nome;
    document.getElementById("contato2").value = motivo_contato;
    document.getElementById("email2").value = email;
    document.getElementById("celular2").value = celular;
    console.log(nome )
    return true;
  }

  function showConfirmation() {
    var overlay = document.getElementById("confirmationOverlay");
    overlay.classList.add("active");
  }