document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        const ingresar = async() => {
            const data = await fetch('./data/usuarios.json');
            const users = await data.json();

            const user = document.querySelector('#usuario').value;
            const password = document.querySelector('#contraseña').value;

            let coincidencia = false;

            users.forEach((element, index) => {
                if(element.user_type == "administrador" && element.id == user && element.password == password){
                    window.location.href = `admin.html?user_type=${element.user_type}`;
                    coincidencia = true;
                    return;
                }else if(element.user_type == "gerente" && element.id == user && element.password == password){
                    window.location.href = `gerente.html?user_type=${element.user_type}`;
                    coincidencia = true;
                    return;
                }else if(element.user_type == "vendedor" && element.id == user && element.password == password){
                    window.location.href = `vendedor.html?user_type=${element.user_type}`;
                    coincidencia = true;
                    return;
                }                
            });

            if (!coincidencia) {
                alert("Usuario o contraseña incorrecta");
                window.location.href = "login.html";
            }
        }

        ingresar();
    });
});