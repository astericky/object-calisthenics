function Job(title, id) {

    function displayOn(aDisplay) {
        var recruiter = [
            'ID: ', id.represent(aDisplay),
            ' / Title: ', title.represent(aDisplay)
        ].join('');
        return aDisplay.test(recruiter);
    }

    return {
        displayOn : displayOn
    };
}
