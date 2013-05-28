function JobseekerResume(jobseeker, resume) {
    function displayOn(aDisplay) {
        var jobseekerResume = [
            'Jobseeker Resume\n',
            '----------------\n',
            jobseeker.displayOn(aDisplay),'\n\n',
            resume.displayOn(aDisplay)
        ].join('');
        console.log(jobseekerResume);
        return aDisplay.test(jobseekerResume);
    }

    return {
        displayOn : displayOn
    };

}
