function Name(name) {
    
    function displayOn(aDisplay) {
        return aDisplay.display(name);  
    }

    return {
        displayOn : displayOn
    };
}


