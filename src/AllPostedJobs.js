function AllPostedJobs() {
    var postedJobs = [];

    function post(recruiterJob) {
        postedJobs.push(recruiterJob);
    }

    function postedBy(recruiter) {
        return select(selectByRecruiter(recruiter));
    }

    function selectByRecruiter(recruiter) {
        return function(job) {
            return job.postedBy(recruiter);
        };
    }

    function exists(job) {
        return select(selectByJob(job));
    }

    function selectByJob(job) {
        return function(postedJob) {
            return job.equals(postedJob);
        };
    }

    function select(fn) { // make this more clear
        var jobs = [];
        var length = postedJobs.length;

        for (var i = 0; i < length; i++) {
            if (fn(postedJobs[i])) {
                jobs.push(postedJobs[i]);
            }
        }

        return new Jobs(jobs);
    }

    return {
        post : post,
        postedBy : postedBy,
        exists : exists
    };
}
