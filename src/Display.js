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

function ApplicationDisplay() {

    function display(job, jobseeker) {
        var aDisplay = new EchoDisplay();
        var application = [
            job.displayOn(aDisplay),
            jobseeker.displayOn(aDisplay)
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



