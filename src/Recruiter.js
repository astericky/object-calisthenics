function Recruiter(name, id) {
    
    function displayOn(aDisplay) {
        var recruiter = name.displayOn(aDisplay);
        return aDisplay.display(recruiter);
    }

    return {
        displayOn : displayOn
    };
}


