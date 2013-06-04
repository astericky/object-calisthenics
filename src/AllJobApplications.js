function AllJobApplications() {
    var jobApplications = [];
    
    function submit(jobApplication) {
        jobApplications.push(jobApplication);
    }
    
    function size() {
        return jobApplications.length;
    }

    function exists(jobApplication) {
        return true;
    }

    function selectByRecruiter(recruiter) {
        return function(job) {
            return job.postedBy(recruiter);
        };
    }

    function selectByJob(job) {
        return function (otherJob) {
            return job.equals(otherJob);
        }
    }

    function selectByDate(date) {
    }

    function select(fn) { // make this more clear
        var applications = [];
        var length = size();

        for (var i = 0; i < length; i++) {
            if (fn(jobApplications[i])) {
                applicarions.push(postedJobs[i]);
            }
        }
        return new Applications(applications);
    }

    return {
        exists : exists,
        submit : submit,
        selectByDate : selectByDate
    };
}
