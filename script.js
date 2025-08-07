

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-bar');
  const input = form.querySelector('input[name="q"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const termo = input.value.toLowerCase().trim(); // Normaliza entrada
    const produtos = document.querySelectorAll('.produtos-card');

    let encontrou = false;

    produtos.forEach(produto => {
      const titulo = produto.querySelector('h3').textContent.toLowerCase();

      if (titulo.includes(termo)) {
        produto.style.display = 'block';
        encontrou = true;
      } else {
        produto.style.display = 'none';
      }
    });

    if (!encontrou) {
      alert("Nenhum produto encontrado.");
    }
  });
});
