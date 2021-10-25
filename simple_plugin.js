(function($){
    //Plugin code below
    }(jQuery));(function($){
//Plugin code below
$.fn.simplePlugin = function() {   
    // alert("Cool plugin");
    this.each(function() {
        $(this).click(function(e) {
        alert("Element class: " + this.className);
        });
        });
};

}(jQuery));