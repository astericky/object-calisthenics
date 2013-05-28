function Jobseeker(name, id) {
    
    function displayOn(aDisplay) {
        var jobseeker = [
            'ID: ', id.displayOn(aDisplay),
            ' / Name: ', name.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(jobseeker);
    }

    return {
        displayOn : displayOn
    };

}
