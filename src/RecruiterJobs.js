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

    function jobsPostedByRecruiter(id) {
        var jobs = [];
        for (var i = 0; i < numberOfJobs; i++) {
            if (id === postedJobs[i].recruiterId) {
                jobs.push(postedJobs[i]);
            }
        }
        return jobs;
    }

    function addJob(id, index) {
        if (id === postedJobs[index].recruiterId) {
            
        }
    }

    return {
        post : post,
        jobsPostedByRecruiter : jobsPostedByRecuiter
    };
}

var recruiterJobs = new RecruiterJobs();
