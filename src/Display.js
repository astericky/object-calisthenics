function ConsoleDisplay() {

    function display(data) {
        console.log(data);
    }

    return {
        display : display
    }
}

function EchoDisplay() {

    function display(data) {
        return data;
    }
    
    return {
        display: display
    };
}

function SavedJobsDisplay() {

    function display(data) {
        var savedJobs = [];
        var length = data.length;
        var aDisplay = new EchoDisplay();

        for(var i = 0; i < length; i++) {
            savedJobs.push(data[i].displayOn(aDisplay));
        }
        return savedJobs;
    }
    return {
        display: display
    };
}

function ApplicationDisplay() {

    function display(jobseeker, job, date, recruiter) {
        var aDisplay = new EchoDisplay();
        var application = [
            jobseeker.displayOn(aDisplay),
            job.displayOn(aDisplay),
            date.toString(),
            recruiter.displayOn(aDisplay)
        ].join(' ');
        return application;
    }
    
    return {
        display: display
    };
}

function SubmittedApplicationDisplay() {

    function display(jobApplication, date) {
        var aDisplay = new ApplicationDisplay();
        var application = [
            jobApplication.displayOn(aDisplay),
            date.toString()
        ].join(' ');
        return application;
    }
    
    return {
        display: display
    };
}



