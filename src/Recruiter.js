function Recruiter(name, id) {
    var name = name;
    var id = id;
    
    function displayOn(aDisplay) {
        name.display(aDisplay);
    }

    return {
        displayOn : displayOn
    };
}

