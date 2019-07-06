var serverSystem = server.registerSystem(0, 0);
const displaychat = "minecraft:display_chat_event";

// Setup which events to listen for
serverSystem.initialize = function () {
    // set up your listenToEvents and register server-side components here.

    //set up chat event data object
    
}

// per-tick updates
serverSystem.update = function () {
    // Any logic that needs to happen every tick on the server.
    //set up chat event data object
    //this.broadcastEvent(displaychat, "§aUpdated...");

    
}

serverSystem.onCaptured = function (eventData) {
    //this.broadcastEvent(displaychat, "§eSquid captured...");

}