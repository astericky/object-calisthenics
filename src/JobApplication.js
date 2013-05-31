function JobApplication(recruiterJob, jobseeker) {

    function getRecruiterJob() {
        return recruiterJob;
    }

    function getJobseeker() {
        return jobseeker;
    }
    
    function equals(jobApplication) {
        var otherRecruiterJob = jobApplication.getRecruiterJob();
        var otherJobseeker = jobApplication.getJobseeker();
        var jobsEqual = recruiterJob.euqals(otherRecruiterJob);
        var jobseekersEqual = jobseeker.equals(otherJobseeker);
        return jobsEqual && jobseekersEqual;
    }

    function displayOn(aDisplay) {
    }
    
    return {
        equals : equals,
        displayOn : displayOn
    };
}
