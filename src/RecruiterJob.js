function RecruiterJob(job, recruiter) {

    function postedBy(jobRecruiter) {
        return (jobRecruiter === recruiter);
    }


    function displayOn(aDisplay) { // need to work on this
        var recruiterJob = [
            'Job: ', job.displayOn(aDisplay),
            ', Recruiter: ', recruiter.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(recruiterJob);
    }
    return {
        postedBy : postedBy,
        displayOn : displayOn
    };
}

