$(document).ready(function(){

    var x = 21741790523;
    var N = 100962387571;

    var inverse = modinv(21741790523, 100962387571);


    $('div.main').append('The multiplicative inverse of ' + x + ' mod ' + N + ': ' + inverse);

});

function modinv(a, m) {

    var v = 1;
    var d = a;
    var u = (a == 1);
    var t = 1-u;

    if (t == 1) {
        var c = m % a;
        u = Math.floor(m/a);
        while (c != 1 && t == 1) {
            var q = Math.floor(d/c);
            d = d % c;
            v = v + q*u;
            t = (d != 1);
            if (t == 1) {
                q = Math.floor(c/d);
                c = c % d;
                u = u + q*v;
            }
        }
        u = v*(1 - t) + t*(m - u);
    }
    return u;
}
