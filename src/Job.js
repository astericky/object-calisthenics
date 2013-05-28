function Job(title, id) {

    function displayOn(aDisplay) {
        var recruiter = [
            'ID: ', id.displayOn(aDisplay),
            ' / Title: ', title.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(recruiter);
    }

    return {
        displayOn : displayOn
    };
}
