window.Cart = {

    API_URL: "http://localhost:8082",

    getCart: function (){
        let userId = 1;
        $.ajax({
            method: "GET",
            url: Cart.API_URL + "/carts/" + userId,
    }).done(function (response){
       Cart.displayProductsInCart(response.products)
    });

    },

    getProductInCartHtml:  function (product){
        return `
        <div class="product-cart d-flex">
				<div class="one-forth">
					<div class="product-img" style="background-image: url(images/${product.imageUrl}.png);">
					</div>
					<div class="display-tc">
						<h3><a href="#" >${product.name}</a></h3>
					</div>
				</div>
				<div class="one-eight text-center">
					<div class="display-tc">
						<span class="price">$${product.price}</span>
					</div>
				</div>
				<div class="one-eight text-center">
					<div class="display-tc">
						<input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value="1" min="1" max="100">
					</div>
				</div>
				<div class="one-eight text-center">
					<div class="display-tc">
						<span class="price">$${product.price}</span>
					</div>
				</div>
				<div class="one-eight text-center">
					<div class="display-tc">
						<button class="btn-light" type="button">Remove</button>
					</div>
				</div>
		</div>
        `
    },

    removeProductFromCart: function (productId){
        let userId = 1;
        let body = {
            productsIds: [
                productId
            ]
        };

        $.ajax({
            method: "DELETE",
            url: Cart.API_URL + "/carts/" + userId,
            contentType: "application/json",
            data: JSON.stringify(body)
        }).done(function (){
            window.location.replace("cart.html");
        });


    },

    displayProductsInCart: function (products){

        let productRowsHtml = '';

        products.forEach(product => productRowsHtml += Cart.getProductInCartHtml(product));

        $('.row-pb-lg:nth-child(2) .col-md-12:first-child').html(productRowsHtml);

    },
    bindEvents: function () {
            $('.col-md-12:nth-child(1)').delegate('btn-light', 'click', function (event){
                let id = $(this).data('id');
                // event.preventDefault();
                console.info('click on ', this, id);

                let buttonClicked = event.target;
                buttonClicked.remove(id);
            });
    }
    };

Cart.getCart();
Cart.bindEvents();