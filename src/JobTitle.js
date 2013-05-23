function JobTitle() {
    var jobTitle = jobTitle;
    
    function display(jobTitleDisplay) {
        jobTitleDisplay.displayOn(jobTitle);
    }

    return {
        display : display
    };
}
