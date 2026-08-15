const productosBusqueda = [
    {
        nombre: "Lencería",
        palabras: "lenceria panty panties body bodys conjuntos corset ropa interior geisha cameron",
        enlace: "productos/lenceria.html"
    },
    {
        nombre: "Pijamas",
        palabras: "pijama pijamas dormir pantalon camiseta algodon descanso",
        enlace: "productos/pijamas.html"
    },
    {
        nombre: "Juguetes sexuales",
        palabras: "juguete juguetes vibrador vibradores dildo estimulador plug anal panty camtoyz asmel tap rose",
        enlace: "productos/juguetes.html"
    },
    {
        nombre: "Lubricantes",
        palabras: "lubricante lubricantes anal frio caliente electrizante sabores multiorgasmo mango chocolate whisky tequila",
        enlace: "productos/lubricantes.html"
    },
    {
        nombre: "Disfraces",
        palabras: "disfraz disfraces erotico eroticos",
        enlace: "productos/disfraces.html"
    },
    {
        nombre: "Accesorios",
        palabras: "accesorio accesorios vela masaje feromonas",
        enlace: "productos/accesorios.html"
    }
];

const buscador = document.getElementById("buscadorProductos");
const resultados = document.getElementById("resultadosBusqueda");

if (buscador && resultados) {

    buscador.addEventListener("input", function () {

        const texto = buscador.value
            .toLowerCase()
            .trim();

        resultados.innerHTML = "";

        if (texto === "") {
            resultados.classList.remove("activo");
            return;
        }

        const encontrados = productosBusqueda.filter(function (producto) {

            return (
                producto.nombre.toLowerCase().includes(texto) ||
                producto.palabras.toLowerCase().includes(texto)
            );

        });

        if (encontrados.length === 0) {

            resultados.innerHTML = `
                <p class="sin-resultados">
                    No encontramos resultados.
                </p>
            `;

            resultados.classList.add("activo");
            return;
        }

        encontrados.forEach(function (producto) {

            const enlace = document.createElement("a");

            enlace.href = producto.enlace;
            enlace.classList.add("resultado-busqueda");
            enlace.textContent = producto.nombre;

            resultados.appendChild(enlace);

        });

        resultados.classList.add("activo");

    });

}
