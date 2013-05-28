function Resume(id) {

    function displayOn(aDisplay) {
        var resume = [
            'Resume\n',
            '------\n',
            id.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(resume);
    }

    return {
        displayOn : displayOn
    };
}
