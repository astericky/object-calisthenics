function Recruiter(name, id) {
    var name = name;
    var id = id;

    function post(job, recruiter) {
        recruiterJobs.post(job, recruiter);
        return true;
    }
    
    function posted() {
        console.log(recruiterJobs.postedByRecruiter(id));
    }

    function displayRecruiter() {
        console.log(name);
    }

    return {
        post : post,
        posted : posted
    };
}


