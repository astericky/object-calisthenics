function JobTitle(title) {
    
    function displayOn(aDisplay) {
        return aDisplay.test(title);
    }

    return {
        displayOn : displayOn
    };
}
