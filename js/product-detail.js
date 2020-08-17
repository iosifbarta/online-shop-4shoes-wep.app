window.ProductDetail = {

    API_URL: "http://localhost:8082",

    getProductDetail: function (){
        let productId = 83;
        $.ajax({

            method: 'GET',
            url: ProductDetail.API_URL + '/products/' + productId
        }).done(function (response){
            ProductDetail.displayProduct(response.content);
        });
    },

    getProductDetailHtml: function (product){

        return`
        <div class="row row-pb-lg product-detail-wrap">
					<div class="col-sm-8">
						<div class="owl-carousel">
							<div class="item">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
								</div>
							</div>
							<div class="item">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
								</div>
							</div>
							<div class="item">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
								</div>
							</div>
							<div class="item">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src="images/${product.imageUrl}.png" class="img-fluid" alt="Free html5 bootstrap 4 template">
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="product-desc">
							<h3>${product.brandName}</h3>
							<p class="price">
								<span>RON ${product.price}</span> 
								<span class="rate">
									<i class="icon-star-full"></i>
									<i class="icon-star-full"></i>
									<i class="icon-star-full"></i>
									<i class="icon-star-full"></i>
									<i class="icon-star-half"></i>
									(74 Rating)
								</span>
							</p>
							<p>${product.description}</p>
							<div class="size-wrap">
								<div class="block-26 mb-2">
									<h4>Size</h4>
				               <ul>
				                  <li><a href="#">7</a></li>
				                  <li><a href="#">7.5</a></li>
				                  <li><a href="#">8</a></li>
				                  <li><a href="#">8.5</a></li>
				                  <li><a href="#">9</a></li>
				                  <li><a href="#">9.5</a></li>
				                  <li><a href="#">10</a></li>
				                  <li><a href="#">10.5</a></li>
				                  <li><a href="#">11</a></li>
				                  <li><a href="#">11.5</a></li>
				                  <li><a href="#">12</a></li>
				                  <li><a href="#">12.5</a></li>
				                  <li><a href="#">13</a></li>
				                  <li><a href="#">13.5</a></li>
				                  <li><a href="#">14</a></li>
				               </ul>
				            </div>
				            <div class="block-26 mb-4">
									<h4>Width</h4>
				               <ul>
				                  <li><a href="#">${product.gender}</a></li>
				               </ul>
				            </div>
							</div>
                     <div class="input-group mb-4">
                     	<span class="input-group-btn">
                        	<button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
                           <i class="icon-minus2"></i>
                        	</button>
                    		</span>
                     	<input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
                     	<span class="input-group-btn ml-1">
                        	<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                             <i class="icon-plus2"></i>
                         </button>
                     	</span>
                  	</div>
                  	<div class="row">
	                  	<div class="col-sm-12 text-center">
									<p class="addtocart" data-quantity="1" data-product_sku=${product.shoeCode} data-product_id=${product.id}><a href="cart.html" class="btn btn-primary btn-addtocart"><i class="icon-shopping-cart"></i> Add to Cart</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
        `
    },
    displayProduct: function (product){
        let productHtml = '';
        product = $(this).data('product_id');
        productHtml.valueOf();

        $('.row.row-pb-lg.product-detail-wrap').html(productHtml);

    }
};
ProductDetail.getProductDetail();