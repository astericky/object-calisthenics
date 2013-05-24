function Recruiter(name, id) {
    
    function displayOn(aDisplay) {
        var recruiter = [
            'ID: ', id.represent(aDisplay),
            ' / Name: ', name.represent(aDisplay)
        ].join('');
        return aDisplay.test(recruiter);
    }

    return {
        displayOn : displayOn
    };
}
