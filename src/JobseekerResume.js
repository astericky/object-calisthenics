function JobseekerResume(jobseeker, resume) {
    
    function postedBy(jobseeker) {
        return (jobseeker === jobseeker);
    }

    function displayOn(aDisplay) {
        var jobseekerResume = [
            '\nJobseeker Resume\n',
            '----------------\n',
            jobseeker.displayOn(aDisplay),'\n\n',
            resume.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(jobseekerResume);
    }

    return {
        postedBy : postedBy,
        displayOn : displayOn
    };

}
