const noticias = [
    {
        tittle: 'Lorem ipsum, dolor sit amet consectetur',
        image: 'noticia1',
        description: 'Quisque vel bibendum justo. Donec pulvinar nisi in feugiat bibendum. Suspendisse et semper orci, sed euismod risus. Donec tempus ligula at massa bibendum faucibus. Curabitur lacus nulla, rutrum non cursus non, facilisis ut turpis. Sed fringilla sed dolor vitae dignissim. Suspendisse efficitur auctor consequat. Vestibulum nec nulla ullamcorper, rhoncus ante.',
    },

    {
        tittle: 'Lorem ipsum dolor sit amet consectetur',
        image: 'noticia2',
        description: 'Nulla porttitor purus quis risus lobortis, sit amet finibus ante tristique. Nunc eu bibendum mauris, non porttitor ipsum. Aliquam pharetra bibendum odio, non facilisis libero dapibus gravida. Sed nec consectetur risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mi lorem, consequat lacinia egestas.',
    },

    {
        tittle: 'veritatis nostrum consequatur cumque',
        image: 'noticia3',
        description: 'Curabitur tincidunt nisi a imperdiet placerat. Nullam pretium viverra felis, quis cursus ligula viverra eget. Pellentesque urna nisl, auctor ut augue non, aliquet ultrices tortor. Quisque consectetur id nisl sed hendrerit. Duis dignissim facilisis purus ut sollicitudin. Nam hendrerit placerat tincidunt. Nunc quis mauris interdum, tristique dolor sed, accumsan dui.'
    },

    {
        tittle: 'inventore accusantium quam incidunt',
        image: 'noticia4',
        description: 'Nullam tristique turpis porttitor, laoreet diam ut, pretium dolor. Curabitur elementum pharetra leo at rhoncus. Nulla rutrum quis diam vitae egestas. Donec non porttitor velit. Integer at enim a sem volutpat egestas. In varius arcu vitae magna congue, sit amet consequat leo maximus. Nam scelerisque, quam nec maximus luctus, dui.'
    }
];

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