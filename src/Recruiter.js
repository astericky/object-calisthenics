function Recruiter(name, id) {

    function equals(recruiter) {
        return id.equals(recruiter.getId());
    }
    
    function displayOn(aDisplay) {
        var recruiter = name.displayOn(aDisplay);
        return aDisplay.display(recruiter);
    }

    function getId() {
        return id;
    }

    return {
        equals : equals,
        displayOn : displayOn,
        getId : getId
    };
}
