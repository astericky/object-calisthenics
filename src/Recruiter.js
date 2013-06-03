function Recruiter(name, id) {

    function getId() {
        return id;
    }

    function equals(recruiter) {
        return id.equals(recruiter.getId());
    }
    
    function displayOn(aDisplay) {
        var recruiter = name.displayOn(aDisplay);
        return aDisplay.display(recruiter);
    }

    return {
        equals : equals,
        displayOn : displayOn
    };
}
