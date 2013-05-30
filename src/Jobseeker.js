function Jobseeker(name, id) {
    
    function displayOn(aDisplay) {
        var jobseeker = name.displayOn(aDisplay);
        return aDisplay.test(jobseeker);
    }

    return {
        displayOn : displayOn
    };

}
