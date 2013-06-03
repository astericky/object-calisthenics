function Jobs(jobs) {

    function getJobs() {
        return jobs;
    }

    function equals(otherJobs) {
        for (var i = 0; i < length; i++) {
        }
    }

    function jobExists(job) {
        var exists = select(selectByJob(job)).length > 0 ? true : false;
        return exists;
    }

    function selectByJob(job) {
        return function(postedJob) {
            var aDisplay = new EchoDisplay();
            var jobId = job.displayOn(aDisplay);
            var postedJobId = postedJob.displayOn(aDisplay);
            return jobId === postedJobId;
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

        // wrap jobs array in a new Jobs class
        return jobs;
    }

    return {
        equals : equals,
        getJobs : getJobs
    };
}
