function JobApplication(recruiterJob, jobseeker) {

    function getRecruiterJob() {
        return recruiterJob;
    }

    function getJobseeker() {
        return jobseeker;
    }
    
    function equals(jobApplication) {
        var job = jobApplication.getRecruiterJob();
        var seeker = jobApplication.getJobseeker();
        var jobsEqual = recruiterJob.equals(job);
        var jobseekersEqual = jobseeker.equals(seeker);
        return jobsEqual && jobseekersEqual;
    }

    function displayOn(aDisplay) {
    }
    
    return {
        equals : equals,
        displayOn : displayOn,
        getRecruiterJob : getRecruiterJob,
        getJobseeker : getJobseeker
    };
}
