function Recruiter(name, id) {
    var name = name;
    var id = id;

    function post(job) {
        recruiterJobs.post(job, id);
        return true;
    }
    
    function posted() {
        console.log(recruiterJobs.postedByRecruiter(id));
    }

    return {
        post : post,
        posted : posted
    };
}

var recruiter = new Recruiter('Chris', '1');
var recruiter2 = new Recruiter('Sean', '2');
