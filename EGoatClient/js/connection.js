// Variables initialization
//
var MY_WEBSOCKET_URL = "ws://tutorial.kaazing.com/jms";
var TOPIC_NAME = "/topic/myTopic";
var IN_DEBUG_MODE = true;
var DEBUG_TO_SCREEN = true;

// WebSocket and JMS variables
//
var connection;
var session;
var wsUrl;
var WEBSOCKET_URL = ("ws://" + window.location.hostname + ":" + window.location.port + "/jms");

// Variable for log messages
//
var screenMsg = "";

// Used for development and debugging. Change between console and page logging.
//
var consoleLog = function(text) {
    if (IN_DEBUG_MODE) {
        if (DEBUG_TO_SCREEN) {
            // Logging to the screen
            screenMsg = screenMsg + text + "<br>";
            $("#logMsgs").html(screenMsg);
        } else {
            // Logging to the browser console
            console.log(text);
        }
    }
};

var handleException = function (e) {
    consoleLog("EXCEPTION: " + e);
};

// Connecting
//
var doConnect = function() {
    // Connect to JMS, create a session and start it.
    //
	consoleLog("Connecting...");
    var stompConnectionFactory = new StompConnectionFactory(WEBSOCKET_URL);
    try {
        var connectionFuture = stompConnectionFactory.createConnection(function() {
            if (!connectionFuture.exception) {
                try {
                    connection = connectionFuture.getValue();
                    connection.setExceptionListener(handleException);

                    consoleLog("Connected to " + WEBSOCKET_URL);
                    session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
                    connection.start(function() {
                        // Put any callback logic here.
                        //
                        consoleLog("JMS session created");
                    });
                } catch (e) {
                    handleException(e);
                }
            } else {
                handleException(connectionFuture.exception);
            }
        });
    } catch (e) {
        handleException(e);
    }
};
