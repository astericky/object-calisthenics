function SubmittedJobApplication(jobApplication, date) {

    function submittedBy(jobseeker) {
        return jobApplication.submittedBy(jobseeker);
    }
   
    function equals(submittedJobApplication) {
        var otherJobApplication = submittedJobApplication.getJobApplication();
        var otherDate = submittedJobApplication.getDate();
        return isJobApplicationEqual(otherJobApplication) && isDateEqual(otherDate);
    }

    function isApplicationEqual(otherJobApplication) {
        return otherJobApplication.equals(jobApplication);
    }

    function isDateEqual(otherDate) {
        return date.getTime() === otherDate.getTime();
    }

    function getJobApplication() {
       return jobApplication;
    }
    
    function getDate() {
        return date;
    }

    function displayOn(aDisplay) {
        return aDisplay.display(jobApplication, date);
    }

    return {
        equals : equals,
        submittedBy : submittedBy,
        getJobApplication : getJobApplication,
        getDate : getDate
    };
}
