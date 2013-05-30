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

    function jobExists(job) {
        var exists = select(selectByJob(job)).length > 0 ? true : false;
        return exists;
    }

    function selectByJob(job) {
        return function(postedJob) {
            var aDisplay = new Display();
            var jobId = job.displayOn(aDisplay);
            var postedJobId = postedJob.displayOn(aDisplay);
            return jobId === postedJobId;
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
        return jobs;
    }

    return {
        post : post,
        postedBy : postedBy
    };
}
