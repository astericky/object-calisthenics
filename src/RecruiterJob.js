function RecruiterJob(recruiter, job) {

    function postedBy(jobRecruiter) {
        return (jobRecruiter === recruiter);
    }

    function equals() {
        return job.equals(job) && recruiter.equals(recruiter);
    }


    function displayOn(aDisplay) {
        var recruiterJob = job.displayOn(aDisplay);;
        return aDisplay.display(recruiterJob);
    }
    return {
        equals : equals,
        displayOn : displayOn,
        postedBy : postedBy,
    };
}

