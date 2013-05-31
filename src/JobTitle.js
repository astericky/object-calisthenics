function JobTitle(title) {
    
    function displayOn(aDisplay) {
        return aDisplay.display(title);
    }

    return {
        displayOn : displayOn
    };
}
