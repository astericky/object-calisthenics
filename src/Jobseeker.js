function Jobseeker(name, id) {
    
    function getId() {
        return id;
    }
    
    function equals(jobseeker) {
        return id.equals(jobseeker.getid());
    }
    
    function displayOn(aDisplay) {
        var jobseeker = name.displayOn(aDisplay);
        return aDisplay.display(jobseeker);
    }

    return {
        equals : equals,
        displayOn : displayOn,
        getid : getId
    };

}
