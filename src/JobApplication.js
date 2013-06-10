function JobApplication(job, jobseeker, date, recruiter) {

    function submittedBy(jobSeeker) {
        return jobSeeker.equals(jobseeker);
    }

    function isRecruiterEqual(otherRecruiter) {
        return recruiter.equals(otherRecruiter);
    }

    function isJobEqual(otherJob) {
        return job.equals(otherJob);
    }

    function isDateEqual(otherDate) {
        return date.getTime() === otherDate.getTime();
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

    function displayOn(aDisplay) {
        return aDisplay.display(jobseeker, job, date, recruiter);
    }

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

    function isResumeRequired() {
        return false;
    }

    return {
        equals : equals,
        displayOn : displayOn,
        submittedBy : submittedBy,
        isRecruiterEqual : isRecruiterEqual,
        isJobEqual : isJobEqual,
        isDateEqual : isDateEqual,
        isResumeRequired : isResumeRequired,
        getJob : getJob,
        getRecruiter : getRecruiter,
        getJobseeker : getJobseeker,
        getDate : getDate
    };
}

function JobApplicationWithResume(job, jobseeker, date, recruiter, resume) {

    function submittedBy(jobSeeker) {
        return jobSeeker.equals(jobseeker);
    }

    function isRecruiterEqual(recruiter) {
        return recruiter.equals(recruiter);
    }

    function isJobEqual(otherJob) {
        return job.equals(otherJob);
    }

    function isDateEqual(otherDate) {
        return date.getTime() === otherDate.getTime();
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

    function displayOn(aDisplay) {
        return aDisplay.display(jobseeker, job, date, recruiter);
    }

    function isResumeRequired() {
        return true;
    }

    function resumeExists() {
        return typeof resume !== 'undefined';
    }

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

    return {
        equals : equals,
        displayOn : displayOn,
        submittedBy : submittedBy,
        isRecruiterEqual : isRecruiterEqual,
        isJobEqual : isJobEqual,
        isDateEqual : isDateEqual,
        isResumeRequired : isResumeRequired,
        resumeExists : resumeExists,
        getJob : getJob,
        getRecruiter : getRecruiter,
        getJobseeker : getJobseeker,
        getDate : getDate
    };
}
