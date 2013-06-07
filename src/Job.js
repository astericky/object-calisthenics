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

    function isResumeRequired() {
        return false;
    }

    return {
        equals : equals,
        displayOn : displayOn,
        isResumeRequired : isResumeRequired,
        getId : getId
    };
}

function JReqJob(title, id) {

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

    function isResumeRequired() {
        return true;
    }

    return {
        equals : equals,
        displayOn : displayOn,
        isResumeRequired : isResumeRequired(),
        getId : getId
    };
}

function ATSJob(title, id) {

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

    function isResumeRequired() {
        return false;
    }

    return {
        equals : equals,
        displayOn : displayOn,
        isResumeRequired : isResumeRequired,
        getId : getId
    };
}
