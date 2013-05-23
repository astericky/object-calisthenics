function RecruiterJobs() {
    var postedJobs = []; // an array of Job objects ex. { title: 'developer', id: 1, recruiterId: 1 )

    function post(jobTitle, recruiter) {
        postedJobs.push(new Job(jobTitle, recruiter));
        return true;
    }

    function postedBy(recruiter) {
        return select(selectByRecruiter(recruiter));
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
        return jobs;
    }

    function display(job) {
        var aDisplay = new Display();
        return job.represent(aDisplay);
    }

    return {
        post : post,
        postedBy : postedBy
    };
}

