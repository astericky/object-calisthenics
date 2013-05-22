function Job(title, recruiter) {
    var title;
    var recruiter;

    function postedBy(jobRecruiter) {
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
