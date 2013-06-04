function SubmittedJobApplication(jobApplication, date) {
   
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

    return {
        equals : equals,
        getJobApplication : getJobApplication,
        getDate : getDate
    };
}
