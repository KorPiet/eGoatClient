//share files
function webSocketUpload()
         {
            if ("WebSocket" in window)
            {
               var ws = new WebSocket("ws://localhost:9000");
           	
               ws.onopen = function()
               {
                  var fileData = $('input[name=upload]').val().replace(/C:\\fakepath\\/g, "") + "\t" + "d5d59516be45fb70fd90e6c3ae3af20f5cd1c1314e3b4db602272cd9ed3e372a" + "\t" + "Zeszyt1.gnumeric";
                  ws.send(fileData);
                  
                  $("#logMsgs").html("Uploading data");
               };
         		
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  $("#logMsgs").html("Data succesfully uploaded");
               };
         		
               ws.onclose = function()
               { 
                  // websocket is closed.
             	  $("#logMsgs").html("Connection is closed"); 
               };
            }
 
         }

//search files
function webSocketSearch()
{
   if ("WebSocket" in window)
   {
     var ws = new WebSocket("ws://localhost:9001");
		
      ws.onopen = function()
      {
         // Web Socket is connected, send data
         ws.send($("input[name=search]").val());
         $("#logMsgs").html("Query send to server");
      };
		
      ws.onmessage = function (evt) 
      { 
         var received_msg = evt.data;
         $("#logMsgs").html("Results received");
      };
		
      ws.onclose = function()
      { 
         // websocket is closed.
    	  $("#logMsgs").html("Connection is closed"); 
      };
   }
   
}

function socketTest(){
	if("WebSocket" in window){
		$("#logMsgs").html("WebSocket is supported");
		console.log(location.port);
	}
	else
		$("#logMsgs").html("<strong> WebSocket is NOT supported </strong>. Try different browser");
}