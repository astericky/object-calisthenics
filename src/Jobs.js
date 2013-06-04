function Jobs(jobs) {

    function equals(otherJobs) {
        return isSameSizeAs(otherJobs) && isSubsetOf(otherJobs); 
    }

    function size() {
        return jobs.length;
    }

    function isSameSizeAs(otherJobs) {
        return size() === otherJobs.size();
    }

    function exists(job) {
        return selectByJob(job);
    }

    function isSubsetOf(otherJobs) {
        return any(otherJobs.exists);
    }

    function selectByJob(job) {
        return function(otherJob) {
            return job.equals(otherJob);
        };
    }

    function any(fn) { // make this more clear
        var length = size();
        for (var i = 0; i < length; i++) {
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
        size : size,
    };
}
