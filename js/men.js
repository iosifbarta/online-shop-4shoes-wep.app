window.Men ={

    API_URL: "http://localhost:8082",

    getProductsForMen: function (){

        $.ajax({
            method: 'GET',
            url: Men.API_URL + '/products?gender=M'

        }).done(function (response){
            Men.displayProducts(response.content);
        });
    },

    getProductsForMenHtml: function (product){
        return `
        <div class="col-md-3 col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img" data-product_id=${product.id}>
								<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
							</a>
							<div class="desc">
								<h2><a href="#">${product.brandName}</a></h2>
								<span class="price">RON ${product.price}</span>
							</div>
							<div class="product-option-shop">
                            <a class="add_to_cart_button" </a>
                            	<p class="addtocart" data-quantity="1" data-product_sku=${product.shoeCode} data-product_id=${product.id}><a href="cart.html" class="btn btn-primary btn-addtocart"><i class="icon-shopping-cart"></i>  Adauga in cos</a></p>

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



    displayProducts: function (products) {
        let productsHtml = "";

        products.forEach(product => productsHtml += Men.getProductsForMenHtml(product));
        $(".colorlib-product .row.row-pb-md").html(productsHtml);
    },

    bindEvents: function () {
        $('.colorlib-product').delegate('.add_to_cart_button', 'click', function (event){
            event.preventDefault();

            let productId = $(this).data('product_id');

            Men.addProductToCart(productId);
        });
        $('.colorlib-product').delegate('.row.row-pb-md:nth-child(2) .prod-img', 'click', function (event){
            event.preventDefault();

            window.location.replace('product-detail.html');

        })

    }
};
Men.getProductsForMen();
Men.bindEvents();