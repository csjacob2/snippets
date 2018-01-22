$(document).ready(function() {

    initialize();

    function initialize(){
        //load the cart with items from json file

        $.get('cart.json', function(data){
            $.get('cartLine.template', function(source) {
                var template = Handlebars.compile(source);
                var cartSummary = template(data.items);
                $('#cart-item-wrapper').html(cartSummary);

                add_click_handlers();
                updateSummary();
            });
        });
    }

    Handlebars.registerHelper('productTotal', function(obj) {
        // extra handlebar helper to calculate product totals

        var productTotal = obj.quantity * obj.unit_price;
        return productTotal.toFixed(2);
    });

    function add_click_handlers() {
        // add click handlers to increment/decrement after line items have been populated

        $('.cart-item').each(function(id){
            $(this).find('.increment').click(click_increment);
            $(this).find('.decrement').click(click_decrement);
        })
    }

    function click_increment(event){
        // increment quantity, product total

        var thisID = '#'+$(this).closest('li').prop('id');
        var qty = parseInt($(thisID+' .cart-table-item.quantity').html());
        qty++;
        var unitprice = $(thisID+' .cart-table-item.unit-price').html().replace('$','');
        var totalprice = '$'+(unitprice * qty).toFixed(2);

        $(thisID+' .cart-table-item.quantity').html(qty);
        $(thisID+' .cart-table-item.unit-total').html(totalprice);
        updateSummary();
    }

    function click_decrement(event){
        // decrement quantity, product total

        var thisID = '#'+$(this).closest('li').prop('id');
        var qty = parseInt($(thisID+' .cart-table-item.quantity').html());
        qty--;

        if (qty == 0) {
            // if quantity is 0, remove line item
            $(thisID).remove();
        } else {
            var unitprice = $(thisID+' .cart-table-item.unit-price').html().replace('$','');
            var totalprice = '$'+(unitprice * qty).toFixed(2);

            $(thisID+' .cart-table-item.quantity').html(qty);
            $(thisID+' .cart-table-item.unit-total').html(totalprice);
        }
        updateSummary();
    }

    function updateSummary() {
        // update summary box

        $.get('cart.json', function(data) {
            var salesTax = data.sales_tax;
            var taxes;
            var subtotal = 0;
            var total;

            $('li.cart-item').each(function() {
                subtotal += parseFloat($(this).find('.unit-total').html().replace('$',''));
            });
            taxes = subtotal * salesTax / 100;
            total = subtotal + taxes;

            $('#cart-summary .subtotal .amount').html('$'+subtotal.toFixed(2));
            $('#cart-summary .taxes .amount').html('$'+taxes.toFixed(2));
            $('#cart-summary .total .amount').html('$'+total.toFixed(2));
        });
    }
});
