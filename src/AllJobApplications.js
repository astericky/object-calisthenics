function AllJobApplications() {
    var jobApplications = [];

    function displayOn(aDisplay) {
        var apps = [];
        var length = size();
        for (var i = 0; i < length; i++) {
            apps.push(jobApplications[i].displayOn(aDisplay));
        }
        return apps;
    }
    
    function submit(jobApplication) {
        if ((!jobApplication.isResumeRequired()) || 
            (jobApplication.isResumeRequired() && 
            jobApplication.resumeExists())) {
            jobApplications.push(jobApplication);
        }
    }


    function size() {
        return jobApplications.length;
    }

    function exists(jobApplication) {
        return any(selectByApplication(jobApplication));
    }

    function findByJobseeker(jobseeker) {
        return select(selectByJobseeker(jobseeker));
    }

    function findByRecruiter(recruiter) {
        return select(selectByRecruiter(recruiter));
    }

    function findByJob(job) {
        return select(selectByJob(job));
    }

    function findByDate(date) {
        return select(selectByDate(date));
    }

    function selectByRecruiter(recruiter) {
        return function (application) {
            return application.isRecruiterEqual(recruiter);
        };
    }

    function selectByJobseeker(jobseeker) {
        return function (application) {
            return application.submittedBy(jobseeker);
        };
    }

    function selectByJob(job) {
        return function (application) {
            return application.isJobEqual(job);
        };
    }

    function selectByApplication(application) {
        return function (otherApplication) {
            return application.equals(otherApplication);
        };
    }

    function selectByDate(date) {
        return function (application) {
            return application.isDateEqual(date);
        };
    }

    function any(fn) { 
        var length = size();
        for (var i = 0; i < length; i++) {
            if (!fn(jobApplications[i])) {
                return false;
            }
        }
        return true;
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
        displayOn : displayOn,
        exists : exists,
        submit : submit,
        findByJobseeker : findByJobseeker,
        findByRecruiter : findByRecruiter,
        findByJob : findByJob,
    };
}
