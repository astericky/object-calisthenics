function Recruiter(name, id) {
    var name = name;
    var id = id;

    function post(job) {
        recruiterJobs.post(job, id);
        return true;
    }
    
    function jobsPosted() {
        recruiterJobs.jobsPosted(id);
    }

    return {
        post : post
    };
}

var recruiter = new Recruiter('Chris', '1');
var recruiter2 = new Recruiter('Sean', '2');
