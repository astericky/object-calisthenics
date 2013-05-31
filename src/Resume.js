function Resume(id) {

    function displayOn(aDisplay) {
        return aDisplay.display(id.displayOn(aDisplay));
    }

    return {
        displayOn : displayOn
    };
}
