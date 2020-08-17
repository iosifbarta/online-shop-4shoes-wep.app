window.Women = {

    API_URL: 'http://localhost:8082',

    getProductsForWomen: function (){

        $.ajax({

           method: 'GET',
           url: Women.API_URL + '/products?gender=F',

        }).done(function (response){
            Women.displayProducts(response.content);
        });

    },

    getProductsForWomenHtml: function (product){
        return`
        <div class="col-lg-4 mb-4 text-center">
			<div class="product-entry border">
					<a href="#" class="prod-img">
						<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
					</a>
				<div class="desc">
					<h2><a href="#">${product.brandName}</a></h2>
					<span class="price">$${product.price}</span>
				</div>
				<div class="product-option-shop">
                     <a class="add_to_cart_button" </a>
                     <p class="addtocart" data-quantity="1" data-product_sku="" data-product_id=${product.id}><a href="cart.html" class="btn btn-primary btn-addtocart"><i class="icon-shopping-cart"></i>  Adauga in cos</a></p>

                 </div>
			</div>
		</div>
        `
    },

    addProductToCart: function (productId){
        let userId = 1;

        let body = {
            productsIds: [
                productId
            ]
        };

        $.ajax({
            method: 'PUT',
            url: Women.API_URL + '/carts/' + userId,
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function (){
            window.location.replace('cart.html');
        });
    },

    displayProducts: function (products){
        let productsHtml = '';

        products.forEach(product => productsHtml += Women.getProductsForWomenHtml(product));
        $('.row .col-lg-9.col-xl-9 .row-pb-md').html(productsHtml);

    },

    bindEvents: function (){
        $('.colorlib-product').delegate('.add_to_cart_button', 'click', function (event){
            event.preventDefault();

            let productId = $(this).data('product_id');

            Women.addProductToCart(productId);
        });

    }
};
Women.getProductsForWomen()