function Jobs(jobs) {

    function getJobs() {
        return jobs;
    }

    function equals(otherJobs) {
        return select(exist(otherJobs)); 
    }

    function exist(otherJobs) {
        var sameJobs = otherJobs.getJobs();
        var length = sameJobs.length;
        for (var i = 0; i < length; i++) {
            return selectByJob(sameJobs[i]);
        }
    }

    function selectByJob(job) {
        return function(otherJob) {
            return job.equals(otherJob);
        };
    }

    function select(fn) { // make this more clear
        var jobs = [];
        var length = jobs.length;

        for (var i = 0; i < length; i++) {
            if (!fn(jobs[i])) {
                return false;
            }
        }

        return true;
    }

    return {
        equals : equals,
        getJobs : getJobs
    };
}
