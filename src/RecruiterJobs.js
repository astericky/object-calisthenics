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
            job.postedBy(recruiter);
        };
    }

    function select(fn) { // select takes a function that takes a job as an arg
        var jobs = [];
        var length = postedJobs.length;

        for (var i = 0; i < length; i++) {
            console.log(fn(postedJobs[i]));
            if (fn(postedJobs[i]) === true) {
                console.log("Chris' Job!");
                jobs.push(postedJobs[i]);
            }
        }
        console.log(jobs);
    }

    return {
        post : post,
        postedBy : postedBy
    };
}

