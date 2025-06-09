 function calcularIMC() {
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);

      if (!peso || !altura) {
        alert("Por favor, preencha os campos corretamente.");
        return;
      }

      const imc = peso / (altura * altura);
      let classificacao = "";

      if (imc < 17) classificacao = "Muito abaixo do peso";
      else if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 25) classificacao = "Peso normal";
      else if (imc < 30) classificacao = "Acima do peso";
      else if (imc < 35) classificacao = "Obesidade I";
      else if (imc < 40) classificacao = "Obesidade II (severa)";
      else classificacao = "Obesidade III (mórbida)";

      document.getElementById("resultado").innerHTML =
        `Seu IMC é <strong>${imc.toFixed(2)}</strong> — ${classificacao}`;
    }