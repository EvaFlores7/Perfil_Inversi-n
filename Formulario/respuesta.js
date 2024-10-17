function calcularResultado() {
    // Inicializa el puntaje total
    let total = 0;
  
    // Recoger los valores seleccionados de las preguntas
    let pregunta1 = document.querySelector('input[name="pregunta1"]:checked');
    // Pregunta 1
    if (pregunta1) {
      total += parseInt(pregunta1.value);
    }
    // Pregunta 2
    let pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    if (pregunta2) {
        total += parseInt(pregunta2.value);
    }
    // Pregunta 3
    let pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
    if (pregunta3) {
    total += parseInt(pregunta3.value);
    }

    // Pregunta 4
    let pregunta4 = document.querySelector('input[name="pregunta4"]:checked');
    if (pregunta4) {
    total += parseInt(pregunta4.value);
    }

    // Pregunta 5
    let pregunta5 = document.querySelector('input[name="pregunta5"]:checked');
    if (pregunta5) {
    total += parseInt(pregunta5.value);
    }

    // Pregunta 6
    let pregunta6 = document.querySelector('input[name="pregunta6"]:checked');
    if (pregunta6) {
    total += parseInt(pregunta6.value);
    }

    // Pregunta 7
    let pregunta7 = document.querySelector('input[name="pregunta7"]:checked');
    if (pregunta7) {
    total += parseInt(pregunta7.value);
    }

    // Pregunta 8
    let pregunta8 = document.querySelector('input[name="pregunta8"]:checked');
    if (pregunta8) {
    total += parseInt(pregunta8.value);
    }

    // Pregunta 9
    let pregunta9 = document.querySelector('input[name="pregunta9"]:checked');
    if (pregunta9) {
    total += parseInt(pregunta9.value);
    }

    // Pregunta 10
    let pregunta10 = document.querySelector('input[name="pregunta10"]:checked');
    if (pregunta10) {
    total += parseInt(pregunta10.value);
    }

    // Pregunta 11
    let pregunta11 = document.querySelector('input[name="pregunta11"]:checked');
    if (pregunta11) {
    total += parseInt(pregunta11.value);
    }

    // Pregunta 12
    let pregunta12 = document.querySelector('input[name="pregunta12"]:checked');
    if (pregunta12) {
    total += parseInt(pregunta12.value);
    }

    // Pregunta 13
    let pregunta13 = document.querySelector('input[name="pregunta13"]:checked');
    if (pregunta13) {
    total += parseInt(pregunta13.value);
    }

    // Pregunta 14
    let pregunta14 = document.querySelector('input[name="pregunta14"]:checked');
    if (pregunta14) {
    total += parseInt(pregunta14.value);
    }

    // Pregunta 15
    let pregunta15 = document.querySelector('input[name="pregunta15"]:checked');
    if (pregunta15) {
    total += parseInt(pregunta15.value);
    }

    // Pregunta 16
    let pregunta16 = document.querySelector('input[name="pregunta16"]:checked');
    if (pregunta16) {
    total += parseInt(pregunta16.value);
    }
  
    // Repetir el mismo proceso para el resto de las preguntas
    // Ejemplo: para la pregunta 2
    // let pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    // if (pregunta2) { total += parseInt(pregunta2.value); }
  
    // Mostrar el resultado
    //document.getElementById("resultado").innerText = "Puntaje total: " + total;


    let categoria;
    if (total <= 14) {
        categoria = "Adverso al riesgo";
    } else if (total <= 28 && total >=15) {
        categoria = "Moderado";
    } else if (total <= 64 && total >=29) {
        categoria = "Propenso a Riesgo";
    } else {
        categoria = "Sofística";
    }


    // Mostrar el resultado final
    /*let fecha = document.getElementById("fecha").value;
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let perfilAntes = document.getElementById("perfilAntes").value;
    let perfilDespues = document.getElementById("perfilDespues").value;

    document.getElementById("resultado").innerHTML = `
      <h3>Resultados de la Encuesta</h3>
      <p><strong>Fecha de la encuesta:</strong> ${fecha}</p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Tipo de perfil (Antes):</strong> ${perfilAntes}</p>
      <p><strong>Tipo de perfil (Después):</strong> ${perfilDespues}</p>
      <p><strong>Puntaje total:</strong> ${total}</p>
    `;
    document.getElementById("resultado").innerText = "Puntaje total: " + total + " - Perfil: " + categoria;*/
    // Mostrar el resultado final

    let fecha = document.getElementById("fecha").value;
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let perfilAntes = document.getElementById("perfilAntes").value;
    let perfilDespues = document.getElementById("perfilDespues").value;

    document.getElementById("resultado").innerHTML = `
      <h3>Resultados de la Encuesta</h3>
      <p><strong>Fecha de la encuesta:</strong> ${fecha}</p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Tipo de perfil (Antes):</strong> ${perfilAntes}</p>
      <p><strong>Tipo de perfil (Después):</strong> ${perfilDespues}</p>
      <p><strong>Puntaje total:</strong> ${total}</p>
    `;

    // Mostrar puntaje y perfil en el resultado
    document.getElementById("resultado").innerText += " - Perfil: " + categoria;

  }
  