function Jobseeker(name, id) {
    
    function displayOn(aDisplay) {
        var jobseeker = [
            'Jobseeker\n',
            '---------\n',
            'ID: ', id.displayOn(aDisplay),
            ' / Name: ', name.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(jobseeker);
    }

    return {
        displayOn : displayOn
    };

}
