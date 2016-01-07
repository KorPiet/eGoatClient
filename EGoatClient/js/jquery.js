$(document).ready(function(){
	$("#search-div").hide();
	$("#upload-div").hide();
	var filePath;
	
    
    $('input[type=file]').on('change', function () {
            filePath=$('input[name=upload]').val().replace(/C:\\fakepath\\/g, ""); 
        	$("#uploaded").append( "Added: " + filePath +"<br>");
        	webSocketUpload();
        	console.log($('input[name=upload]').val().replace(/C:\\fakepath\\/g, "") + "\t" + "d5d59516be45fb70fd90e6c3ae3af20f5cd1c1314e3b4db602272cd9ed3e372a" + "\t" + "Zeszyt1.gnumeric");
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
    	
    	webSocketSearch();
    });
 
    $("#upload-button").click(function(){
    	document.getElementById("fileupload").click();
    });
    	  	
});