
function verificar() {
     let clave1 = document.getElementById('clave1').value;
        let clave2 = document.getElementById('clave2').value;
        if (clave1 == clave2) {
            alert('Las dos claves ingresadas son iguales');
        } else {
            alert('Las dos claves ingresadas son distintas');
        }
    }
    function mostrarSeleccionPizza() {
        document.getElementById('mensaje').value =
            document.getElementById('pizza').options[document.getElementById('pizza').selectedIndex].value;
    }

    function verificar() {
        let deportes = '';
        if (document.getElementById("checkbox1").checked) {
            deportes = deportes + 'Fútbol ';
        }
        if (document.getElementById("checkbox2").checked) {
            deportes = deportes + 'Básquet ';
        }
        if (document.getElementById("checkbox3").checked) {
            deportes = deportes + 'Tenis';
        }
        alert('Los deportes seleccionados son:' + deportes);
    }

    function verificar() {
        if (document.getElementById('radio1').checked) {
            alert('Eres mayor de edad y por lo tanto puede ingresar');
        }
        if (document.getElementById('radio2').checked) {
            alert('No eres mayor de edad y por lo tanto no puede ingresar');
        }
    }