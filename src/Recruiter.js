function Recruiter(name, id) {
    
    function displayOn(aDisplay) {
        var recruiter = name.displayOn(aDisplay);
        return aDisplay.test(recruiter);
    }

    return {
        displayOn : displayOn
    };
}


