function RecruiterJobs() {
    var postedJobs = []; // an array of Job objects ex. { title: 'developer', id: 1, recruiterId: 1 )
    var numberOfJobs = 0;

    function post(job, recruiterId) {
        numberOfJobs++;
        postedJobs.push({
            title       : job,
            id          : numberOfJobs,
            recruiterId : recruiterId
        });
        return true;
    }

    function postedByRecruiter(id) {
        var jobs = [];
        for (var i = 0; i < numberOfJobs; i++) {
            addJob(id, i, jobs);
        }
        return jobs;
    }

    function addJob(id, index, jobs) {
        if (id === postedJobs[index].recruiterId) {
            jobs.push(postedJobs[index]);
        }
    }

    return {
        post : post,
        postedByRecruiter : postedByRecruiter
    };
}

var recruiterJobs = new RecruiterJobs();
