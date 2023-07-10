document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Verifica se todos os campos estão preenchidos corretamente
    if (validateForm()) {
      showConfirmation(); // Exibe a tela de confirmação
      document.getElementById("myForm").reset(); // Limpa os campos do formulário
      setTimeout(function(){
        window.location.href = "index.html"
      },3000);
    }
  });

  function validateForm() {
    var nome = document.getElementById("nome").value;
    var motivo_contato = document.getElementById("motivo_contato").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;

    if (nome === "" || email === "" || motivo_contato === "" || celular === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    return true;
  }

  function showConfirmation() {
    var overlay = document.getElementById("confirmationOverlay");
    overlay.classList.add("active");
  }