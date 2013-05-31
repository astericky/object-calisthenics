function SavedJob(jobseeker, job) {
    function savedBy(jobCandidate) {
        return (jobCandidate === jobseeker);
    }

    function displayOn(aDisplay) { // need to work on this
        var savedJob = [
            'Saved Jobs\n',
            '----------\n',
            job.displayOn(aDisplay),
            jobseeker.displayOn(aDisplay)
        ].join('');
        return aDisplay.display(savedJob);
    }

    return {
        savedBy : savedBy,
        displayOn : displayOn
    }; 
}
