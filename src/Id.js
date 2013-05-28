function Id(id) {

    function displayOn(aDisplay) {
        return aDisplay.test(id);
    }

    return {
        displayOn : displayOn
    };
}
