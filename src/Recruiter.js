function Recruiter(name, id) {
    
    function displayOn(aDisplay) {
        var recruiter = [
            'ID: ', id.displayOn(aDisplay),
            ' / Name: ', name.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(recruiter);
    }

    return {
        displayOn : displayOn
    };
}


