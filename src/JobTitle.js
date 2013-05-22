function JobTitle() {
    var jobTitle = jobTitle;
    
    function displayJobTitle(display) {
        display(jobTitle);
    }

    return {
        displayJobTitle : displayJobTitle
    };
}
