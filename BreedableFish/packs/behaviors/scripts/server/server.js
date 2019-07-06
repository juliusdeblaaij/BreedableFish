var serverSystem = server.registerSystem(0, 0);
const displaychat = "minecraft:display_chat_event";

let globalVars = {};

globalVars.emptyQuery = {};
globalVars.isFirstTick = false;

const capturedComponent = "breedablefish:captured";

// Setup which events to listen for
serverSystem.initialize = function () {
    // set up your listenToEvents and register server-side components here.

    this.registerComponent(capturedComponent, { status: 0 });

    this.listenForEvent("breedablefish:on_captured", (eventData) => this.onCaptured(eventData));

    globalVars.emptyQuery = this.registerQuery();
}

// per-tick updates
serverSystem.update = function () {
    let captured_entities = [];
    captured_entities = this.getEntitiesFromQuery(globalVars.emptyQuery);

    if (captured_entities != null && captured_entities.length > 0) {
        for (let i = 0; i < captured_entities.length; i++) {
            let captured_entity = this.createEntity();
            captured_entity = captured_entities[i];

            if (captured_entity.__identifier__ === "minecraft:squid") {
                //this.broadcastEvent(displaychat, "§aFound squid");

                //if (this.hasComponent(captured_entity, capturedComponent)) {
                //    //this.broadcastEvent(displaychat, "§aFound squid with component");
                //    //let _capturedComponent = this.getComponent(captured_entity, capturedComponent);

                //    //_capturedComponent.data.status = 

                //}

                //if (this.hasComponent(captured_entity, "minecraft:interact")) {
                //    //this.broadcastEvent(displaychat, "§aFound squid with interact");
                //    //let _capturedComponent = this.getComponent(captured_entity, capturedComponent);

                //    //_capturedComponent.data.status = 

                //}
            }
        }
    }

    
}

serverSystem.onCaptured = function (eventData) {
    this.broadcastEvent(displaychat, "§eSquid captured...");

}