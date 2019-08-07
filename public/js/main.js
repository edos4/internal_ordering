"use strict";

// for all dom reference
const domController = (function () {
    const domNames = {
        productsContainer: "products-container",
        accordionBrand: ".accordion-brand",
        accordionItem: ".accordion-item",
        accordionBrandToggle: ".accordion-brand-toggle",
        addQuantity: ".add-quantity",
        subQuantity: ".sub-quantity",
        product_name: ".product-info h2",
        product_price: ".product-info .price",
        product_image: "img",
        product_description: ".product-info .description",
        product_quantity: ".action .product-quantity",
        product_quantity: ".action .product-quantity",
        cartContainer: "cart-container",
        addToCart: "add-to-cart",
        tabMenu: ".tab-menu",
        tabMenuOption: ".tab-menu-option",
        tabContent: ".tab-content",
        cartQuantity: ".cart-quantity",
        priceTotal: ".price-total",
        back: ".back",
        totalCheckout: "h3.total-value",
        totalCheckoutInput: "input.total-value",
        radioContainerInput: ".radio-container input",
        checkOutButton: "checkout-button",
        question: '.question',
        infobox: 'info-box',
        search: '.search',
        searchContainer: '.search-container',
        searchResultsContainer: '.search-results-container',
        subTotal: "sub-total",
        serviceFee: "service-fee",
        hops: "hops"
    }


    return {
        //function to return all dom names
        getDomNames: function () {
            return domNames;
        }
    }
})();

//for data query and storage
const dataController = (function (dom) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const domNames = dom.getDomNames();
    let hops = 0;

    function appendToCart(product) {
        let cartContainer = document.getElementById(domNames.cartContainer);
        let div = document.createElement('div');
        let order = `<div class="accordion-item" data-id="${product.id}">
					<div class="image-container">
						<img src="${product.image}">
					</div>
					<div class="product-info">
						<div class="upper-product-info">
							<div class="product-text">
								<h2>${product.name}</h2>
								<p class="description">${product.description}</p>
							</div>
							<p class="price">₱${product.price}</p>
						</div>
						<div class="action">
							<button class="sub-quantity">-</button>
							<span class="product-quantity">${product.quantity}</span>
							<button class="add-quantity">+</button>
						</div>
					</div>
				</div>`;
        div.innerHTML = order;
        cartContainer.insertBefore(div.firstChild, cartContainer.childNodes[2]);
    }
    function removeFromCart(id) {
        let cartContainer = document.getElementById(domNames.cartContainer);
        let node = cartContainer.querySelector('[data-id="' + id + '"]');
        node.parentNode.removeChild(node);
    }
    //ajax to get products
    function getProducts(product_name){
        var request = $.ajax({
            url: "/find_product",
            type: "GET",
            data: { "data": product_name},
            dataType: "json"
        });

        return request;
    }

    return {
        findProducts: function(product_name){
            return getProducts(product_name);
        },
        getCart: function () {
            return cart;
        },
        removeItem: function (id, value) {
            let itemContainers = document.querySelectorAll('[data-id="' + id + '"]');
            let product = {
                id: id,
                name: itemContainers[0].querySelector(domNames.product_name).textContent,
                quantity: value,
                category: itemContainers[0].parentElement.parentElement.parentElement.id.split("-")[0]
            }
            itemContainers.forEach(function (itemContainer) {
                itemContainer.querySelector('.product-quantity').innerHTML = product.quantity;
            });
            //look for product id in cart
            let product_index = cart.findIndex(cartItem => cartItem.id === product.id);
            if (product_index !== -1) {
                if (product.quantity === 0) {
                    //remove if quantity = 0
                    cart.splice(product_index, 1)
                    let brand_index = cart.findIndex(cartItem => cartItem.brand === product.brand);
                    let category_index = cart.findIndex(cartItem => cartItem.category === product.category);
                    if (product.category === "pasalubong" || product.catergory === "snackpack") {
                        if (brand_index === -1) {
                            hops--;
                        }
                    }else{
                        if(cart.filter(cartItem => cartItem.category === product.category).length === 0 ){
                            hops--;
                        }
                    }
                    removeFromCart(product.id);
                } else {
                    cart[product_index].quantity = product.quantity;
                }
            } else {

            }
            //store it locally to prevent data loss
            // localStorage.setItem("cart", JSON.stringify(cart));
            return cart;
        },
        addItem: function (id, value) {
            let itemContainers = document.querySelectorAll('[data-id="' + id + '"]');
            let imageContainer = itemContainers[0].querySelector(domNames.product_image);
            let image = "../images/diet.png";
            if(imageContainer){
                image = itemContainers[0].querySelector(domNames.product_image).getAttribute('src')
            }
            //build product
            let product = {
                id: id,
                name: itemContainers[0].querySelector(domNames.product_name).textContent,
                quantity: value,
                price: parseFloat(itemContainers[0].querySelector(domNames.product_price).textContent.slice(1)),
                description: itemContainers[0].querySelector(domNames.product_description).textContent,
                image: image,
                brand: itemContainers[0].parentElement.parentElement.id,
                category: itemContainers[0].parentElement.parentElement.parentElement.id.split("-")[0]
            }

            itemContainers.forEach(function (itemContainer) {
                itemContainer.querySelector('.product-quantity').innerHTML = product.quantity;
            });

            let brand_index = cart.findIndex(cartItem => cartItem.brand === product.brand);
            let product_index = cart.findIndex(cartItem => cartItem.id === product.id);
            let category_index = cart.findIndex(cartItem => cartItem.category === product.category);
            if (product_index !== -1) {
                cart[product_index].quantity = product.quantity;
            } else {
                cart = [product, ...cart]
                appendToCart(product);
            }
            if (product.category === "pasalubong" || product.catergory === "snackpack"){
                if (brand_index === -1) {
                    hops++;
                }
            } else {
                if (category_index === -1){
                    hops++;
                }
            }
            //store it locally to prevent data loss
            // localStorage.setItem("cart", JSON.stringify(cart));
            return cart;
        },
        getTotals: function () {
            let totalQuantity = 0;
            let totalPrice = 0;

            cart.forEach(function (cartItem) {
                totalQuantity += cartItem.quantity;
                totalPrice += cartItem.price * cartItem.quantity;
            })

            return {
                hops,
                totalPrice,
                totalQuantity
            }
        }
    }
})(domController);


// all events and functions
const mainController = (function (dom, data) {
    localStorage.removeItem("cart");
    const domNames = dom.getDomNames();
    let cart = data.getCart();

    //get all brand toggles
    let brandToggles = document.querySelectorAll(domNames.accordionBrandToggle);
    brandToggles.forEach((brandToggle) => {
        //add click listener for each toggle
        brandToggle.addEventListener('click', () => {
            brandToggle.classList.toggle('active');
            brandToggle.nextElementSibling.classList.toggle('auto-height');
        })
    });

    document.addEventListener('click', function (e) {
        // subtract quantity

        if (e.target.classList.contains('sub-quantity')) {
            let value = parseInt(e.target.nextElementSibling.textContent);
            if (value > 0) {
                value -= 1;
            }
            e.target.nextElementSibling.textContent = value;
            let cart = data.removeItem(e.target.parentElement.parentElement.parentElement.dataset.id, value);

            updateQuantity(cart);
            if (cart.length === 0) {
                document.getElementById(domNames.addToCart).style.display = "none";
            }
        }
        // add quantity
        if (e.target.classList.contains('add-quantity')) {
            let value = parseInt(e.target.previousElementSibling.textContent);
            value += 1;
            e.target.previousElementSibling.textContent = value;
            let cartAdded = data.addItem(e.target.parentElement.parentElement.parentElement.dataset.id, value);
            updateQuantity(cartAdded)
            document.getElementById(domNames.addToCart).style.display = "block";

        }

        if(e.target.classList.contains('close')){
            e.target.parentElement.remove();
        }
    });
    let timer;
    let doneTyping = 700;
    document.addEventListener('keydown',function(e){
        if (e.target.id === "search-filter") {
            clearTimeout(timer);
        }
    })
    document.addEventListener('keyup', function(e){
        if(e.target.id === "search-filter"){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                let request = dataController.findProducts(e.target.value);
                request.done(function (data) {
                    let products = data.products;
                    let resultsContainer = document.querySelector(domNames.searchResultsContainer);
                    let results = '';
                        products.map((product) => {
                            let image = product.image.url || product.image;
                            let order = `<div class="accordion-item" data-id="${product.p.id}">
                            <div class="image-container">
                                <img src="${image}">
                            </div>
                        <div class="product-info">
                            <div class="upper-product-info">
                                <div class="product-text">
                                    <h2>${product.p.name}</h2>
                                    <p class="description">${product.p.description}</p>
                                </div>
                                <p class="price">₱${product.p.price}</p>
                            </div>
                            <div class="action">
                                <button class="sub-quantity">-</button>
                                <span class="product-quantity">0</span>
                                <button class="add-quantity">+</button>
                            </div>
                        </div>
                    </div>`;
                            results += order;
                        })
                        resultsContainer.innerHTML = results;
                    });

                    request.fail(function (jqXHR, textStatus) {
                        // alert("Request failed: " + textStatus);
                    })
                }
               , doneTyping
            )
        }
    })



    //tab-menu
    const tabMenus = document.querySelectorAll(domNames.tabMenuOption);
    const tabContents = document.querySelectorAll(domNames.tabContent);
    if (tabMenus) tabMenus.forEach(function (tabMenu) {
        tabMenu.addEventListener('click', function () {
            tabMenus.forEach(function (tab) {
                tab.classList.remove('active')
            })
            tabContents.forEach(function (tab) {
                tab.classList.remove('active')
            })
            let contentid = this.dataset.target;
            document.getElementById(contentid).classList.add('active');
            this.classList.add('active');
        })
    })

    const totalCheckout = document.querySelector(domNames.totalCheckout);
    const totalCheckoutInput = document.querySelector(domNames.totalCheckoutInput);
    const subTotal = document.getElementById(domNames.subTotal);
    const hopsContainer = document.getElementById(domNames.hops);
    const serviceFee = document.getElementById(domNames.serviceFee);
    function updateQuantity(cart) {
        const quantityContainer = document.querySelector(domNames.cartQuantity);
        const totalContainer = document.querySelector(domNames.priceTotal);
        let totalQuantity = 0;
        let totalPrice = 0;

        let total = dataController.getTotals();

        totalPrice = total.totalPrice;
        totalQuantity = total.totalQuantity;

        quantityContainer.innerHTML = totalQuantity;
        totalContainer.innerHTML = "₱" + Math.round(totalPrice * 100) / 100;
        addHop(total);
        return {
            totalPrice,
            totalQuantity
        }
    }


    function addHop(total){
        let order = getFormData($("form"));
        let deliverytype = order.delivery_options;
        let value = 0;
        if (deliverytype === "standard"){
            value = 99;
        }else{
            value = 149;
        }
        let totalCheckoutValue = total.totalPrice;
        let deliveryHopCharge = value;
        let hops = total.hops;
        let hopCharge = 0;
        ((hops - 2) * 39) > 0 ? hopCharge = (hops - 2) * 39 : hopCharge = 0;
        if (hops > 2) {
            deliveryHopCharge = value + ((hops - 2) * 39);
        }
        totalCheckoutValue += deliveryHopCharge;
        totalCheckout.innerHTML = "₱" + Math.round(totalCheckoutValue * 100) / 100;
        totalCheckoutInput.value = totalCheckoutValue;
        hopsContainer.innerHTML = `<p> Additional hops charge(${hops}):</p><p class="sub-total-value">${hopCharge}</p>`
        subTotal.innerHTML = `<p> Sub total:</p><p class="sub-total-value">₱${Math.round(total.totalPrice * 100) / 100}</p>`;
        serviceFee.innerHTML = `<p> Delivery Type(${deliverytype}):</p><p class="sub-total-value">₱${deliveryHopCharge}</p>`;
        return {
            deliveryHopCharge,
            total,
            totalCheckoutValue
        }
    }

    //on select
    let hopButtons = document.querySelectorAll(domNames.radioContainerInput);
    hopButtons.forEach(function (hop) {
        hop.addEventListener('click', function () {
            let total = dataController.getTotals();
            addHop(total);
        })
    })
    //bind search page build
    const search = document.querySelectorAll(domNames.search);
    search.forEach((searchIcon)=>{
        searchIcon.addEventListener('click', ()=>{
            buildSearch();
        })
    })
    // build search page
    function buildSearch(){
        let searchContainer = document.createElement('div');
        searchContainer.classList.add('search-div');
        let html = `
            <div class="close"><img src="/images/left-arrow.svg"> Back </div>
            <div class="search-filter-container">
                <input id="search-filter" type="text" placeholder="Search products">
            </div>
            <div class="search-results-container">
            </div>
        `
        searchContainer.innerHTML = html;
        document.body.appendChild(searchContainer)
    }

    //tab animation
    const searchFilter = document.querySelector(domNames.searchContainer)
    const tabMenu = document.querySelector(domNames.tabMenu);

    document.onscroll = function () {
        let currentDistance = window.pageYOffset;
        if (currentDistance > 60) {
            tabMenu.style.transform = "scale(1)"
            // tabMenu.style.width = "100%";
            tabMenu.style.position = "fixed";
            tabMenu.style.top = "30px";
            tabMenu.style.marginTop = "0";
            tabMenu.style.borderRadius = "0";
            tabMenu.style.justifyContent = "space-around";
            tabMenu.classList.add('fixed');
            searchFilter.classList.remove('hidden');
            tabMenu.querySelectorAll('p').forEach(function (p) { p.style.display = "none" });
            searchFilter.style.cssText = "display: block; position: fixed; left: 0;";
        }
        else {
            searchFilter.classList.add('hidden');
            tabMenu.classList.remove('fixed');
            // tabMenu.style.width = "90%";
            tabMenu.style.transform = "scale(0.9)"
            tabMenu.style.position = "relative";
            tabMenu.style.top = "0";
            tabMenu.style.marginTop = "-20px";
            tabMenu.style.borderRadius = "5px"
            tabMenu.style.justifyContent = "space-between";;
            tabMenu.querySelectorAll('p').forEach(function(p){p.style.display = "block" });
            searchFilter.style.cssText = "display: none";
        }

    }

    //cart toggle
    const showCartButton = document.getElementById(domNames.addToCart);
    const cartContainer = document.getElementById(domNames.cartContainer)
    showCartButton.addEventListener('click', function () {
        cartContainer.style.left = "0";
        hopButtons[0].checked = true;
        let total = dataController.getTotals();
        addHop(total);
    })
    //back
    const backButton = document.querySelector(domNames.back);
    backButton.addEventListener('click', function () {
        cartContainer.style.left = "100%";
    })

    //infobox (What's this)
    const infoBoxToggle = document.querySelector(domNames.question);
    const infobox = document.getElementById(domNames.infobox);
    infoBoxToggle.addEventListener('click', ()=>{
        infobox.style.display = "flex";
    })
    infobox.addEventListener('click', ()=>{
        infobox.style.display = "none";
    })


    //form to json
    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

    // checkout
    const checkOutButton = document.getElementById(domNames.checkOutButton);
    checkOutButton.addEventListener('click', function () {
        let order = getFormData($("form"));
        this.innerHTML = "<div class='loader'></div>";
        let total = dataController.getTotals();
        order.actual_shipping_cost = addHop(total).deliveryHopCharge;
        let cart = dataController.getCart();
        let send  = checkform();
        if(send){
            let orderData = {
                order,
                cart
            }
            var request = $.ajax({
                url: "/carts/conf",
                type: "POST",
                data: orderData,
                dataType: "json"
            });

            request.done(function (msg) {
                let div = document.createElement('div');
                div.classList.add("success-message");
                let html = `
                    <img src="/images/kangaroo.svg">
                    <h3> Thank you for allowing us to serve you and we hope you enjoyed your Tinderoo experience. Hop with us again soon! Your Tinderoo Assistant will notify you when delivery has been dispatched. </h3>
                    <a href="/" class="btn btn-block btn-primary"> Continue Shopping </a>
                `
                div.innerHTML = html;
                document.body.appendChild(div);
            });

            request.fail(function (jqXHR, textStatus) {
                // alert("Request failed: " + textStatus);
            });
        }

    });

    //validate form
    function checkform() {
        var f = document.forms.namedItem("form").elements;
        for (var i = 0; i < f.length; i++) {
            var cansubmit = true;
            if (f[i].value.length == 0) { cansubmit = false };
            if (!cansubmit && f[i].type !== "button") {
                f[i].closest('.details-section').querySelector('.error-message').style.display = "block";
            } else {
                f[i].closest('.details-section').querySelector('.error-message').style.display = "none";
            }
        }
        document.getElementById('checkout-button').disabled = !cansubmit;
        return cansubmit;
    }

})(domController, dataController);


function initMap() {
    var input = document.getElementById('address_input');
    var inputLatlng = document.getElementById("latLong");
    var autocomplete = new google.maps.places.Autocomplete(input);
    var geocoder = new google.maps.Geocoder;
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        var mapContainer = document.getElementById('map');
        mapContainer.style.maxHeight = '150px';
        let latLng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
        inputLatlng.value = JSON.stringify(latLng);
        var map = new google.maps.Map(mapContainer, {
            zoom: 18,
            center: latLng
        });
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true,
            title: place.name
        });

        google.maps.event.addListener(marker, 'dragend', function (marker) {
            var latLng = marker.latLng;
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        var input = document.getElementById('address_input');

                        inputLatlng.value = JSON.stringify(latLng);
                        input.value = results[0].formatted_address;
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        });
    });
}
