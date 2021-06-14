
const buscador = document.getElementById('buscador');
buscador.addEventListener('click',ApiCanciones);


function ApiCanciones(){
    const contenedor = document.getElementById('contenedor');
    const tituloContenedor = document.createElement('h2');
    const letraContenedor = document.createElement('p');
    contenedor.append(tituloContenedor,letraContenedor)
    const artist = document.getElementById('artist').value;
    const title = document.getElementById('song').value;
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
        .then (response => response.json())
        .then (data => letraContenedor.textContent = `${data}`)

}

ApiCanciones();

