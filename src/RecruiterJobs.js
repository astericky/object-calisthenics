function RecruiterJobs() {
    var postedJobs = []; // an array of Job objects ex. { title: 'developer', id: 1, recruiterId: 1 )

    function post(jobTitle, recruiter) {
        postedJobs.push(new Job(jobTitle, recruiter));
        return true;
    }

    function postedBy(recruiter) {
        select(selectByRecruiter(recruiter)).forEach(displayJob);
    }

    function selectByRecruiter(recruiter) {
        return function(job) {
            return job.postedBy(recruiter);
        };
    }

    function select(fn) { // select takes a function that takes a job as an arg
        var jobs = [];
        var length = postedJobs.length;

        for (var i = 0; i < length; i++) {
            if (fn(postedJobs[i])) {
                jobs.push(postedJobs[i]);
            }
        }
        return (jobs);
    }

    function displayJob(job) {
        job.displayJob();
    }

    return {
        post : post,
        postedBy : postedBy
    };
}

