const getNoticias = async() => {

    const data = await fetch('./data/news.json');
    const noticias = await data.json();

    let news = document.querySelector('#news');

    noticias.forEach((element, index) => {
        news.innerHTML += `
        <article class="news">
            <h2 class="titulo_noticias">
                ${element.tittle}
            </h2>
            <figure class="figura">
                <img class="img-responsive" src="./assets/images/${element.image}.jpg" alt="Imagen de la noticia primera" width="319" height="91">
                
                <figcaption class="resumen">
                    ${element.description}
                </figcaption>
            </figure>
            <footer class="not_footer">
                <a class="w-100" href="">Leer noticia completa</a>
                <p class="w-100">Publicado: 2023-09-08</p>
            </footer>
        </article>
        `;
    });
}

getNoticias();