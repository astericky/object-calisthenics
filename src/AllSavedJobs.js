function AllSavedJobs() {
    var savedJobs = [];

    function save(job) {
        savedJobs.push(job);
    }

    function savedBy(jobseeker) {
        return select(selectByJobseeker(jobseeker));
    }

    function selectByJobseeker(jobseeker) {
        return function(job) {
            return job.savedBy(jobseeker);
        };
    }

    function select(fn) { // make this more clear
        var jobs = [];
        var length = savedJos.length;

        for (var i = 0; i < length; i++) {
            if (fn(savedJobs[i])) {
                jobs.push(savedJobs[i]);
            }
        }
        return jobs;
    }

    return {
        save : save,
        savedBy : savedBy
    };
}
