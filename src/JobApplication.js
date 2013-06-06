function JobApplication(recruiterJob, jobseeker, date) {

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
        var date = jobApplication.getDate();
        var dateEqual = isDateEqual(date);
        var jobsEqual = recruiterJob.equals(job);
        var jobseekersEqual = jobseeker.equals(seeker);
        return jobsEqual && jobseekersEqual && dateEqual;
    }

    function isDateEqual(otherDate) {
        return date.getTime() === otherDate.getTime();
    }

    function displayOn(aDisplay) {
        return aDisplay.display(recruiterJob, jobseeker, date);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        submittedBy : submittedBy,
        getRecruiterJob : getRecruiterJob,
        getJobseeker : getJobseeker,
        getDate : date
    };
}
