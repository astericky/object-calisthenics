function Job(title, recruiter) {
    var title;
    var recruiter;

    function postedBy(jobRecruiter) {
        return (jobRecruiter === recruiter);
    }

    function represent(display) {
        return display.test(title);
    }

    return {
        postedBy : postedBy,
        represent : represent
    };
}
