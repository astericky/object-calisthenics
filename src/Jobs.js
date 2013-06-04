function Jobs(jobs) {

    function equals(otherJobs) {
        return select(exist(otherJobs)); 
    }

    function size() {
        return jobs.length;
    }

    function isSameSizeAs(otherJobs) {
        return size === otherJobs.size();
    }

    function exists(job) {
        selectByJob(job);
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
            return 
            if (!fn(jobs[i])) {
                return false;
            }
        }

        return true;
    }

    return {
        equals : equals,
        exists : exists,
        isSameSizeAs : isSameSizeAs,
        size : size
    };
}
