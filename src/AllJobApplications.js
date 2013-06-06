function AllJobApplications() {
    var jobApplications = [];
    
    function submit(jobApplication) {
        jobApplications.push(jobApplication);
    }

    function submittedBy(jobseeker) {
        return select(selectByJobseeker(jobseeker));
    }
    
    function size() {
        return jobApplications.length;
    }

    function exists(jobApplication) {
        return true;
    }

    function selectByApplication(application) {
        return function(otherApplication) {
            return application.equals(otherApplication);
        };
    }

    function selectByRecruiter(recruiter) {
        return function(job) {
            return job.postedBy(recruiter);
        };
    }

    function selectByJobseeker(jobseeker) {
        return function(application) {
            return application.submittedBy(jobseeker);
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
        var apps = [];
        var length = size();

        for (var i = 0; i < length; i++) {
            if (fn(jobApplications[i])) {
                apps.push(jobApplications[i]);
            }
        }
        return new Applications(apps);
    }

    return {
        exists : exists,
        submit : submit,
        submittedBy : submittedBy,
        selectByDate : selectByDate
    };
}
