function Job(title, recruiter) {
    var title;
    var recruiter;

    function postedBy(jobRecruiter) {
        return (jobRecruiter === recruiter);
    }

    function displayOn(aDisplay) {
        aDisplay.display(title);
    }

    return {
        postedBy : postedBy,
        displayOn : displayOn
    };
}
