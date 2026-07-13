async function loadProducts() {

    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            const contenedor = document.getElementById("contenedor");

            data.textos.forEach(texto => {

                contenedor.innerHTML += `
                    <h2 id="titulo">${texto.titulo}</h2>
                    <p id="descripcion">${texto.descripcion}</p>
                `;

            });

        });

}

loadProducts();