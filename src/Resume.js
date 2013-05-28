function Resume(id) {

    function displayOn(aDisplay) {
        var resume = [
            'Resume/', id.displayOn(aDisplay),
        ].join('');
        return aDisplay.test(resume);
    }

    return {
        displayOn : displayOn
    };
}
