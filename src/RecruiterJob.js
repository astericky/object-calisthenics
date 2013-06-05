function RecruiterJob(recruiter, job) {
    
    function getRecruiter() {
        return recruiter;
    }

    function getJob() {
        return job;
    }

    function postedBy(jobRecruiter) {
        return jobRecruiter.equals(recruiter);
    }

    function equals(recruiterJob) {
        var aRecruiter = recruiterJob.getRecruiter();
        var aJob = recruiterJob.getJob();
        var recruitersEqual = recruiter.equals(aRecruiter);
        var jobsEqual = job.equals(aJob);
        return recruitersEqual && jobsEqual;
    }

    function displayOn(aDisplay) {
        var recruiterJob = job.displayOn(aDisplay);;
        return aDisplay.display(recruiterJob);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        postedBy : postedBy,
        getRecruiter : getRecruiter,
        getJob : getJob
    };
}

