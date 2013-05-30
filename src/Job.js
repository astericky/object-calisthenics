function Job(title, id) {
    // protected method only use with other objects of the same type
    function getId() {
        return id;
    }

    function equals(job) {
        return id.equals(job.getId());
    }

    function displayOn(aDisplay) {
        var jobTitle = title.displayOn(aDisplay);
        return aDisplay.test(jobTitle);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        getId : getId
    };
}
