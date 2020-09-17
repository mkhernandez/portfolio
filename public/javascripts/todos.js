//Check off specific todo by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed"); 
});

//Click on X to delete the todo item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//listener for input
$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        let inputText = $(this).val();
        $(this).val("");
        $("#todoList").append("<li><span>X</span> " + inputText + "</li>");
    }
});