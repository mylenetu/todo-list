// Check Off Specific To-do's By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete To Do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopImmediatePropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear form field after adding to list
		$(this).val("");
		//create new li then add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});