window.Shop = {

    API_URL: "http://localhost:8082",

    getProducts: function () {
        $.ajax({
            method: "GET",
            url: Shop.API_URL + "/products",
        }).done(function (response) {
            Shop.displayProducts(response.content);
        })
    },

    getProductsHtml: function (product){
        return `
        <div class="col-md-3 col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src="images/mens/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
							</a>
							<div class="desc">
								<h2><a href="#">${product.brandName}</a></h2>
								<span class="price">RON ${product.price}</span>
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
            method: "PUT",
            url: Shop.API_URL + "/carts/" + userId,
            contentType: "application/json",
            data: JSON.stringify(body)

        }).done(function (){

            window.location.replace("cart.html");
        });
    },
    displayProducts: function (products){
        let productsHtml = "";

        products.forEach(product => productsHtml += Shop.getProductsHtml(product));
        $(".colorlib-product .row.row-pb-md").html(productsHtml);

    },

    bindEvents: function () {
        $('.colorlib-product').delegate('.add_to_cart_button', 'click', function (event){
            event.preventDefault();

            let productId = $(this).data('product_id');

            Shop.addProductToCart(productId);
        });

    }
};

Shop.getProducts();
Shop.bindEvents();
