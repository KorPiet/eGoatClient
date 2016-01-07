$(document).ready(function(){
	$("#search-div").hide();
	$("#upload-div").hide();
	var filePath;
	
    
    $('input[type=file]').on('change', function () {
            filePath=$('#fileupload').val(); 
        	$("#uploaded").append( "Added: " + filePath +"<br>");
    });
	
    $("#start").click(function(){
    	$("#start-div").show();
        $("#search-div").hide();
        $("#upload-div").hide();
    });
    
    $("#search").click(function(){
    	$("#search-div").show();
        $("#start-div").hide();
        $("#upload-div").hide();
    });
    
    $("#upload").click(function(){
    	$("#search-div").hide();
        $("#start-div").hide();
        $("#upload-div").show();
    });
    
    $("#search-button").click(function(){
    	var toFind = $("input[name=search]").val()
    	$("#results").html("Searching for: " + toFind + "...");
    	
    	$("#results").append("<br> No results.");
    });
 
    $("#upload-button").click(function(){
    	document.getElementById("fileupload").click();
    });
    	  	
});