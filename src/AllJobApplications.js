function AllJobApplications() {
    var submittedJobApplications = [];
    
    function submit(jobApplication) {
        submittedJobApplications.push(jobApplication);
    }

    function exists(jobApplication) {
    }

    selectByRecruiter(recruiter) {
    }

    selectByJob(job) {
    }

    selectByDate(date) {
    }


    return {
        exists : exists,
        submit : submit,
        selectByDate : selectByDate
    };
}
