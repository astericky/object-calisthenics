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

    function display(resume) {
        var aDisplay = new Display();
        return resume.displayOn(aDisplay);
    }

    return {
        post : post,
        postedBy : postedBy
    };
}

