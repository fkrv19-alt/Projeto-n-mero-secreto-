<script>
    let nomes = ["Pablo", "Pietro", "Joana", "Ana", "Fernanda", "Marcos", "Pedro", "Paulo"];

    function atualizarLista() {
      const ul = document.getElementById('lista');
      ul.innerHTML = "";
      nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
      });
    }

    function adicionarNome() {
      const input = document.getElementById('nomeInput');
      const nome = input.value.trim();
      if (nome) {
        nomes.push(nome);
        input.value = "";
        atualizarLista();
      }
    }

    function sortear() {
      if (nomes.length < 2) {
        alert("Adicione pelo menos 2 pessoas para sortear!");
        return;
      }

      let sorteados = [...nomes];
      let resultado = [];
      let valido = false;

      while (!valido) {
        sorteados.sort(() => Math.random() - 0.5);
        valido = true;
        for (let i = 0; i < nomes.length; i++) {
          if (nomes[i] === sorteados[i]) {
            valido = false;
            break;
          }
        }
      }

      for (let i = 0; i < nomes.length; i++) {
        resultado.push(`${nomes[i]} → ${sorteados[i]}`);
      }

      const ul = document.getElementById('resultado');git branch -M main
      ul.innerHTML = "";
      resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
    }

    atualizarLista();
  </script>

</body>
</html>

