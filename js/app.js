
document.getElementById('btn').addEventListener('click', productosApi)

function productosApi() {

    // se Obtienen productos de una Api "fake" y se muestran 10 articulos
	var aleatorio =  Math.floor(Math.random() * 200)
	url = 'https://api.escuelajs.co/api/v1/products?offset=00&limit=10'
    fetch(url)
        .then(res => res.json())
        .then(data => { 
			
			let productos = data
			let output = ""
        	output = getProductos(productos, output)
            document.getElementById('output').innerHTML = output
        })
}

function getProductos (productos, output) {
	
	productos.forEach(function (lists) {
		output += `
				<div class="productos__caja">
					<div class="">
						<ul class="list-group">
						<li class="list-group-item"><h4>Producto:</h4><p>${lists.title}</p></li>
						<li class="list-group-item"><h4>Descripcion:</h4><p>${lists.description}</p></li>
						<li class="list-group-item"><h4>Precio:</h4><p>$${lists.price}</p4></li>
						<li class="list-group-item"><img class="productos__imagen" src="${lists.images[0]}"></li>
						</ul>
					</div>
				</div> `
	})
	return output
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

