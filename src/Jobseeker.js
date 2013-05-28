function Jobseeker(name, id) {
    
    function displayOn(aDisplay) {
        var jobseeker = [
            '\n\nJobseeker:\n',
            '  ID: ', id.displayOn(aDisplay),
            ' / Name: ', name.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(jobseeker);
    }

    return {
        displayOn : displayOn
    };

}
