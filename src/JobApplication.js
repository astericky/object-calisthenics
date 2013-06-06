function JobApplication(job, recruiter, jobseeker, date) {

    function getJob() {
        return job;
    }

    function getRecruiter() {
        return recruiter;
    }

    function getJobseeker() {
        return jobseeker;
    }

    function getDate() {
        return date;
    }

    function submittedBy(jobSeeker) {
        return jobSeeker.equals(jobseeker);
    }
    
    function equals(jobApplication) {
        var job = jobApplication.getJob();
        var seeker = jobApplication.getJobseeker();
        var theRecruiter = jobApplication.getRecruiter();
        var date = jobApplication.getDate();
        var dateEqual = isDateEqual(date);
        var jobsEqual = job.equals(job);
        var jobseekersEqual = jobseeker.equals(seeker);
        var recruiterEqual = theRecruiter.equals(recruiter);
        return jobsEqual && jobseekersEqual && dateEqual;
    }

    function isDateEqual(otherDate) {
        return date.getTime() === otherDate.getTime();
    }

    function displayOn(aDisplay) {
        return aDisplay.display(jobseeker, job, date, recruiter);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        submittedBy : submittedBy,
        getJob : getJob,
        getRecruiter : getRecruiter,
        getJobseeker : getJobseeker,
        getDate : getDate
    };
}
