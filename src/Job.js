function Job(title, recruiter) {
    var title;
    var recruiter;

    function postedBy(jobRecruiter) {
        console.log(recruiter);
        console.log(jobRecruiter === recruiter);
        return (jobRecruiter === recruiter);
    }

    function displayJob() {
        console.log(title);
    }

    return {
        postedBy : postedBy,
        displayJob : displayJob
    };
}
