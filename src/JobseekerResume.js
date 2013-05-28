function JobseekerResume(jobseeker, resume) {
    function displayOn(aDisplay) {
        var jobseekerResume = [
            'Jobseeker: ', jobseeker.displayOn(aDisplay),
            ' / Resume: ', resume.displayOn(aDisplay)
        ].join('');
        return aDisplay.test(jobseekerResume);
    }

    return {
        displayOn : displayOn
    };

}
