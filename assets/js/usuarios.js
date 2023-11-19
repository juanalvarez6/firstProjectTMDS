const type_user = window.location.search.split('user_type=')[1];
const contUser = document.querySelector('#contenido');
const sectionTable = document.querySelector('#sectionTable');

if(type_user == 'administrador'){
    sectionTable.style.display = 'none';
    contUser.innerHTML = `
        <h2 class="fw-bold fs-1 mx-3 my-4">Bienvenido Administrador</h2>
        <div class="d-flex fs-2 fw-bold flex-wrap justify-content-center gap-4 m-4">
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-primary align-items-center p-5"><i class="bi bi-person-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">3</span>
                    <span class="text-center">Usuarios</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-warning align-items-center p-5"><i class="bi bi-list-task text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">20</span>
                    <span class="text-center">Categorias</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-success align-items-center p-5"><i class="bi bi-cart-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">20</span>
                    <span class="text-center">Productos</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-danger align-items-center p-5"><i class="bi bi-currency-dollar text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">0</span>
                    <span class="text-center">Ventas</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-info align-items-center p-5"><i class="bi bi-file-earmark-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">2</span>
                    <span class="text-center">Facturas</span>
                </div>
            </div>
        </div>
    `;
}else if(type_user == 'gerente'){
    sectionTable.style.display = 'none';
    contUser.innerHTML = `
        <h2 class="fw-bold fs-1 mx-3 my-4">Bienvenido Gerente</h2>
        <div class="d-flex fs-2 fw-bold flex-wrap justify-content-center gap-4 m-4">
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-warning align-items-center p-5"><i class="bi bi-list-task text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">20</span>
                    <span class="text-center">Categorias</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-success align-items-center p-5"><i class="bi bi-cart-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">20</span>
                    <span class="text-center">Productos</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-danger align-items-center p-5"><i class="bi bi-currency-dollar text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">0</span>
                    <span class="text-center">Ventas</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-info align-items-center p-5"><i class="bi bi-file-earmark-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">2</span>
                    <span class="text-center">Facturas</span>
                </div>
            </div>
        </div>
    `;
}else if(type_user == 'vendedor'){
    sectionTable.style.display = 'none';
    contUser.innerHTML = `
        <h2 class="fw-bold fs-1 mx-3 my-4">Bienvenido Vendedor</h2>
        <div class="d-flex fs-2 fw-bold flex-wrap justify-content-center gap-4 m-4">
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-success align-items-center p-5"><i class="bi bi-cart-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">20</span>
                    <span class="text-center">Productos</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-danger align-items-center p-5"><i class="bi bi-currency-dollar text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">0</span>
                    <span class="text-center">Ventas</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="d-flex bg-info align-items-center p-5"><i class="bi bi-file-earmark-fill text-light"></i></div>
                <div class="d-flex flex-column p-5">
                    <span class="text-center">2</span>
                    <span class="text-center">Facturas</span>
                </div>
            </div>
        </div>
    `;
}else{
    const tableShow = window.location.search.split('&=')[1];
    var title = 'REGISTROS';
    if(tableShow == 'productos'){
        title = 'INVENTARIO';
    }
    const viewTables = document.querySelector('#viewTables');
    const viewRegistros = document.querySelector('#view-registros');
    var numeroRegistro = 1;
    fetch(`./data/${tableShow}.json`)
    .then( response => response.json())
    .then( data => {

        viewTables.innerHTML = `
        <h2 class="fs-1 fw-bold">${title} DE ${tableShow.toUpperCase()}</h2>
        <table class="table table-striped table " id="table">
            <thead>
                <tr class="table-dark">
                    ${Object.keys(data[0]).map( key => `<th class="fs-5" scope="col">${key.toUpperCase()}</th>`).join('')}
                </tr>
            </thead>

            <tbody>
                ${data.map( row => `
                    <tr>
                        ${Object.keys(row).map( cell => `<td class="fs-6">${row[cell]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>`;

        viewRegistros.innerHTML = `
        <div class="cont-registros">
        <h2 class="ms-2 title-table">${title} DE ${tableShow.toUpperCase()}</h2>
            ${data.map(row => `
                <h3 class="ms-2">Registro #${numeroRegistro++}</h3>
                <div class="registro m-2">
                    ${Object.entries(row).map(([key, value]) => `
                        <div class="px-2 pt-2">
                                <h4 class="bg-dark text-light mb-0 p-2">${key.toUpperCase()}</h4>
                                <p class="bg-secondary text-light p-2 fs-4">${value}</p>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>`;

        let tables = new DataTable('#table', {
        
        });
    });
}