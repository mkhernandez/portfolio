//Check off specific todo by clicking
$("li").click(function() {
    $(this).toggleClass("completed"); 
});

//Click on X to delete the todo item
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});