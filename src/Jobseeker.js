function Jobseeker(name, id) {
    
    function displayOn(aDisplay) {
        var jobseeker = name.displayOn(aDisplay);
        return aDisplay.display(jobseeker);
    }

    return {
        displayOn : displayOn
    };

}
