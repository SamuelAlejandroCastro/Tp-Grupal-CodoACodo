
document.getElementById('btn').addEventListener('click', productosApi)

function productosApi() {

    // se Obtienen productos de una Api "fake" y se muestran 10 articulos
	var aleatorio =  Math.floor(Math.random() * 200)
	url = 'https://api.escuelajs.co/api/v1/products?offset=00&limit=10'
    fetch(url)
        .then(res => res.json())
        .then(data => { 
			
			let productos = data
			let output = "<h3><center>Listado de Productos</center></h3>"
        	output = getProductos(productos, output)
            document.getElementById('output').innerHTML = output
        })
}

function getProductos (productos, output) {
	
	productos.forEach(function (lists) {
		output += `
				<div class="container">
					<div class="card mt-4 bg-light">
						<ul class="list-group">
						<li class="list-group-item"><h4>Producto: ${lists.title}</h4></li>
						<li class="list-group-item"><h4>Descripcion: ${lists.description}</h4></li>
						<li class="list-group-item"><h4>Precio: ${lists.price}$</h4></li>
						<li class="list-group-item"><img src="${lists.images[0]}"></li>
						</ul>
					</div>
				</div> `
	})
	return output
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

