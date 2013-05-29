function AllResumes() {
    var postedResumes = [];

    function post(jobseekerResume) {
        postedResumes.push(jobseekerResume);
    }

    function postedBy(jobseeker) {
        return select(selectByJobseeker(jobseeker));
    }

    function selectByJobseeker(jobseeker) {
        return function(resume) {
            return resume.postedBy(jobseeker);
        };
    }

    function resumeExists(resume) {
        var exists = select(selectByResume(resume)).length === 1 ? true : false;
        console.log(select(selectByResume(resume)).length);
        return exists;
    }
    
    function selectByResume(resume) {
        return function(postedResume) {
            console.log(postedResume);
            return (resume === postedResume);
        }
    }

    function select(fn) { // make this more clear
        var resumes = [];
        var length = postedResumes.length;

        for (var i = 0; i < length; i++) {
            if (fn(postedResumes[i])) {
                resumes.push(postedResumes[i]);
            }
        }
        return resumes;
    }

    return {
        post : post,
        postedBy : postedBy,
        resumeExists : resumeExists
    };
}

