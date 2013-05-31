function Job(title, id) {
    
    function getId() {
        return id;
    }

    function equals(job) {
        return id.equals(job.getId());
    }

    function displayOn(aDisplay) {
        var jobTitle = title.displayOn(aDisplay);
        return aDisplay.display(jobTitle);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        getId : getId
    };
}
