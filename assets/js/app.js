$( document ).ready(function() {
    var bgServices = [
        "#FFBFBF",
        "#BCF2BA",
        "#C6DFFF",
        "#FEE7B2",
        "#818CF280",
        "#B798EB80"
    ]
    $(".service .service__container .service__item").each((index) => {
        $( this ).css("background-color", bgServices[index]);
        console.log($( this ));
    });
});