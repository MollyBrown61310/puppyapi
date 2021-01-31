//JQuery
$(document).ready(function(){


});

//Client side API call using AJAX

function ajaxMethod(){
	
	$("#userList").empty(); //got rid of what was 
	
	var number = $("#dogs").val();
	
	
	
	$.ajax({
		url: "https://dog.ceo/api/breeds/image/random/"+number,
		type: 'GET',
		dataType : "json",
        
	}).fail(function(response) {
 
        
 
    }).done(function(response) {
    
    console.log(JSON.stringify(response.message))
    
		
    	$.each(response.message, function(key, value) {
    	
    		console.log(value)
    		
    		
    		
    		var userResults = "<div class='col-lg-3 col-md-6 mb-4'>" +
    	        "<div class='card h-100'>" +
    	        "<img class='card-img-top' src='"+value+"' alt=''>" +
    	          "<div class='card-body'>" +
    	            
    	            
    	          "</div>" +
    	          "<div class='card-footer'>" +
    	            
    	          "</div>" +
    	        "</div>" +
    	      "</div>";
    	        
    	      $("#userList").append(userResults);
       	});
	});
}

