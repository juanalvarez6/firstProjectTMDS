const getServicios = async() => {

    const data = await fetch('./data/servicios.json');
    const servicios = await data.json();

    let services = document.querySelector('#servicios div');

    servicios.forEach((element, index) => {
        services.innerHTML += `
        <div class="item-serv p-4">
            <article class="service">
                <h2 class="text-center">
                   ${element.icono} ${element.titulo}
                </h2>
                <figure>
                    <figcaption class="text-just">
                        ${element.descripción}
                    </figcaption>
                </figure>
            </article>
        </div>
        `;
    });
}

getServicios();