document.getElementById('acceder-login').addEventListener('click', function (){
    var email = document.getElementById('email').value;
    var contrasenia = document.getElementById('password').value;

    //construir el formulario
    var formulario = new FormData();
    formulario.append('correo',email);
    formulario.append('contrasenia',contrasenia);

    //enviar la solicitud a la API
    fetch('http://localhost/asistencia-docente-back/login',{
        method: 'POST',
        body: formulario
    })
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        localStorage.setItem('nombres',data[0].nombres);
        window.location.href = 'pages/home.html';
    })
    .catch(error => {
        window.alert('No se pudo conectar con el servidor');
        console.error('Error mio: ', error);
    });

});