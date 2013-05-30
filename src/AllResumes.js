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
        var exists = select(selectByResume(resume)).length > 0 ? true : false;
        return exists;
    }
    
    function selectByResume(resume) {
        return function(postedResume) {
            var aDisplay = new Display();
            var resumeId = resume.displayOn(aDisplay);
            var postedResumeId = postedResume.displayOn(aDisplay);
            return resumeId === postedResumeId;
        };
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

