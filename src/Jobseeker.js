function Jobseeker(name, id) {
    var savedJobs = [];

    function save(job) {
        savedJobs.push(job);
    }
    
    function getId() {
        return id;
    }
    
    function equals(jobseeker) {
        return id.equals(jobseeker.getid());
    }
    
    function displayOn(aDisplay) {
        var jobseeker = name.displayOn(aDisplay);
        return aDisplay.display(jobseeker);
    }

    function displaySavedJobsOn(aDisplay) {
        return aDisplay.display(savedJobs);
    }

    return {
        save : save,
        equals : equals,
        displayOn : displayOn,
        displaySavedJobsOn : displaySavedJobsOn,
        getid : getId
    };

}
