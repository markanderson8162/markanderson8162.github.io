//when toggling between colors like this, use rgb() values in the if statement
//$(this).css("color") will return an rgb() value

// $("li").on("click", function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			textDecoration:"none",
// 			color:"black"
// 		});
// 	}else{
// 		$(this).css({
// 			textDecoration:"line-through",
// 			color:"gray"
// 		});

// 	}
// });

//create a class selector in css with the properties you want, then .toggleClass() will add and remove it
//the "li" is a second argument that will add the listener to the li instead of the ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", ".deleteItem", function(event){
	$(this).parent().fadeOut(250, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//$(this).val() takes the text in the input field
		var todoText = $(this).val()
		//create new li with the value from the input
		$("ul").append("<li><span class='deleteItem'><i class='far fa-trash-alt'></i></span> "+ todoText +"</li>");
		$("input[type='text']").val("");

	}
	
});

$(".fa-edit").on("click", function(){
	$("input[type='text']").fadeToggle(250);
});