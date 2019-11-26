// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



let server = email.server.connect({
    user: 'ariel.reyes.flores@gmail.com',
    password: '$programmer31416',
    host: 'smpt.gmail.com',
    port: '587',
    tsl: true
});

server.send({
    text: 'Reserva realizada',
    from: 'ariel.reyes.flores@gmail.com',
    to: 'aluna@grupopalmareal.com',
    subject: 'Reserva hecha'
}, () => )

// Write your JavaScript code.
$(window).load(function () {
    var item = $(".item");

    // agrego la clase blur a todos los 'item' que NO sea al que le se le esta aplicando el evento 'hover'
    item.hover(function () {
        item.not($(this)).addClass('blur');
        // al perder el foco, retiro la clase a todos los 'item'
    }, function () {
        item.removeClass('blur');
    });
});

$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})


$(window).load(function () {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight / itemlength + 1);
    $('#myCarousel .list-group-item').outerHeight(triggerheight);
});

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
$('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());