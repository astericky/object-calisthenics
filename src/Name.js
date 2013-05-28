function Name(name) {
    
    function displayOn(aDisplay) {
        return aDisplay.test(name);  
    }

    return {
        displayOn : displayOn
    };
}


