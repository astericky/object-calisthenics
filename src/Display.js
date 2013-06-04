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
    }
}

function ApplicationDisplay() {

    function display(job, jobseeker) {
        var aDisplay = new EchoDisplay();
        var application = [
            job.displayOn(aDisplay),
            jobseeker.displayOn(aDisplay)
        ].join(' ');
        return { 
            display : display
        };
    }
    
    return {
        display: display
    }
}

function SubmittedJobApplicationDisplay() {
}

