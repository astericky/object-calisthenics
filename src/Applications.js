function Applications(applications) {

    function displayOn(aDisplay) {
        var apps = [];
        var length = size();
        for (var i = 0; i < length; i++) {
            apps.push(applications[i].displayOn(aDisplay));
        }
        return apps;
    }

    function equals(otherApplications) {
        return isSameSizeAs(otherApplications) && isSubsetOf(otherApplications); 
    }

    function size() {
        return applications.length;
    }

    function isSameSizeAs(otherApplications) {
        return size() === otherApplications.size();
    }

    function exists(application) {
        return selectByApplication(application);
    }

    function isSubsetOf(otherApplications) {
        return any(otherApplications.exists);
    }

    function submittedBy(jobseeker) {
        return select(selectByJobseeker(jobseeker));
    }

    function byRecruiter(recruiter) {
        return select(selectByRecruiter(recruiter));
    }

    function byJob(job) {
        return select(selectByJob(job));
    }

    function selectByApplication(application) {
        return function(otherApplication) {
            return application.equals(otherApplication);
        };
    }

    function selectByRecruiter(recruiter) {
        return function(application) {
            return application.isRecruiterEqual(recruiter);
        };
    }

    function selectByJobseeker(jobseeker) {
        return function(application) {
            return application.submittedBy(jobseeker);
        };
    }

    function selectByJob(job) {
        return function (application) {
            return application.isJobEqual(job);
        };
    }

    /*function selectByDate(date) 
        return function (application) {
            return application.isDateEqual(date);
        };
    }*/

    function any(fn) { 
        var length = size();
        for (var i = 0; i < length; i++) {
            if (!fn(applications[i])) {
                return false;
            }
        }
        return true;
    }

    function select(fn) { // make this more clear
        var apps = [];
        var length = size();

        for (var i = 0; i < length; i++) {
            if (fn(applications[i])) {
                apps.push(applications[i]);
            }
        }
        //console.log(apps);
        return new Applications(apps);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        exists : exists,
        isSameSizeAs : isSameSizeAs,
        size : size,
        submittedBy : submittedBy,
        byRecruiter : byRecruiter,
        byJob : byJob,
    };
}
