function AllJobApplications() {
    var jobApplications = [];
    
    function submit(jobApplication) {
        jobApplications.push(jobApplication);
    }
    
    function size() {
        return jobApplications.length;
    }

    function exists(jobApplication) {
    }

    function selectByRecruiter(recruiter) {
    }

    function selectByJob(job) {
    }

    function selectByDate(date) {
    }

    function select(fn) { // make this more clear
        var applications = [];
        var length = postedJobs.length;

        for (var i = 0; i < length; i++) {
            if (fn(postedJobs[i])) {
                jobs.push(postedJobs[i]);
            }
        }

        return new Jobs(jobs);
    }

    return {
        exists : exists,
        submit : submit,
        selectByDate : selectByDate
    };
}
