var clientSystem = client.registerSystem(0, 0);
const displaychat = "minecraft:display_chat_event";

let globalVars = {};

globalVars.emptyQuery = {};
globalVars.isFirstTick = false;

const capturedComponent = "breedablefish:captured";

//var onCapturedEvent = { narf: false };

// Setup which events to listen for
clientSystem.initialize = function () {
    // set up your listenToEvents and register client-side components here.
    this.listenForEvent("minecraft:client_entered_world", (eventData) => this.clientJoined(eventData));
    this.listenForEvent("breedablefish:on_captured", (eventData) => this.onCaptured(eventData));

    //this.registerComponent("breedablefish:captured", { value: 0 });

    //filtered_query = this.registerQuery();
    //this.addFilterToQuery(filtered_query, "minecraft:behavior.squid_idle");//breedablefish:captured

    this.registerComponent(capturedComponent, { status: 0 });

    globalVars.emptyQuery = this.registerQuery();
}


clientSystem.clientJoined = function (eventData) {
    this.broadcastEvent(displaychat, "§aLoaded...");

    let captured_entities = [];
    captured_entities = this.getEntitiesFromQuery(globalVars.emptyQuery);

    if (globalVars.isFirstTick === false) {

        if (captured_entities != null && captured_entities.length > 0) {
            for (let i = 0; i < captured_entities.length; i++) {
                let captured_entity = this.createEntity();
                captured_entity = captured_entities[i];

                if (captured_entity.__identifier__ === "minecraft:squid") {
                    //this.broadcastEvent(displaychat, "§aFound squid");

                    if (this.createComponent(captured_entity, "breedablefish:captured") != null) {
                        this.broadcastEvent(displaychat, "§a Added component to squid");

                    } else {
                        this.broadcastEvent(displaychat, "Something went wrong while adding breedablefish:captured component to squid!");

                    }
                }

            }
        }

        globalVars.isFirstTick = true;
    }
}
// per-tick updates
clientSystem.update = function () {
    // Any logic that needs to happen every tick on the client.

    let captured_entities = [];
    captured_entities = this.getEntitiesFromQuery(globalVars.emptyQuery);

    if (captured_entities != null && captured_entities.length > 0) {
        for (let i = 0; i < captured_entities.length; i++) {
            let captured_entity = this.createEntity();
            captured_entity = captured_entities[i];

            if (captured_entity.__identifier__ === "minecraft:squid") {
                //this.broadcastEvent(displaychat, "§aFound squid");

                if (this.hasComponent(captured_entity, capturedComponent)) {
                    //this.broadcastEvent(displaychat, "§aFound squid with component");
                    //let _capturedComponent = this.getComponent(captured_entity, capturedComponent);

                    //_capturedComponent.data.status = 

                }

                if (this.hasComponent(captured_entity, "minecraft:interact")) {
                    this.broadcastEvent(displaychat, "§aFound squid with interact");
                    //let _capturedComponent = this.getComponent(captured_entity, capturedComponent);

                    //_capturedComponent.data.status = 

                }
            }
        }
    }
    
}

clientSystem.onCaptured = function (eventData) {
    this.broadcastEvent(displaychat, "§aCaptured");

}