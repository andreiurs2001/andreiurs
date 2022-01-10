function q_and_a() {
    if(document.getElementById('select1').value == 1) {
        document.getElementById('ri').innerHTML = "Pelase choose an option!";
    }
    else if(document.getElementById('select1').value == 2){
        document.getElementById('ri').innerHTML = "You have choosen the second option!";
    }
    else {
        document.getElementById('ri').innerHTML = "-first item" + '<br>' + "-second item" + "<span class='text-danger' style='background-color: black; padding: 10px 15px; border-radius: 3px; margin:15px;'>Note: <span/> Last Item";
    }
}

$(window).on("load", function () {
    $("#preloader").delay(3000).fadeOut();
})