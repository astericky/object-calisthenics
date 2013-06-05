function JobApplication(recruiterJob, jobseeker) {

    function getRecruiterJob() {
        return recruiterJob;
    }

    function getJobseeker() {
        return jobseeker;
    }

    function submittedBy(jobSeeker) {
        return jobSeeker.equals(jobseeker);
    }
    
    function equals(jobApplication) {
        var job = jobApplication.getRecruiterJob();
        var seeker = jobApplication.getJobseeker();
        var jobsEqual = recruiterJob.equals(job);
        var jobseekersEqual = jobseeker.equals(seeker);
        return jobsEqual && jobseekersEqual;
    }

    function displayOn(aDisplay) {
        return aDisplay.display(recruiterJob, jobseeker);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        submittedBy : submittedBy,
        getRecruiterJob : getRecruiterJob,
        getJobseeker : getJobseeker
    };
}
