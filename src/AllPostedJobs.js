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

    function display(job) {
        var aDisplay = new Display();
        return job.displayOn(aDisplay);
    }

    return {
        post : post,
        postedBy : postedBy
    };
}
