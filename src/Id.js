function Id(id) {
    // come back to this
    function getId() {
        return id;
    }

    function equals(ID) {
        //var aDisplay = new Display();
        return id === ID.getId();
    }

    function displayOn(aDisplay) {
        return aDisplay.display(id);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        getId : getId
    };
}
