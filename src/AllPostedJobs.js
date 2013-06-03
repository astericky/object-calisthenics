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
        return select(selectByJob(job));
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
        var length = postedJobs.length;

        for (var i = 0; i < length; i++) {
            if (fn(postedJobs[i])) {
                jobs.push(postedJobs[i]);
            }
        }

        return new Jobs(jobs);
    }

    function displayOn(aDisplay) {

    }

    return {
        post : post,
        postedBy : postedBy,
        jobExists : jobExists,
        displayOn : displayOn
    };
}
