function Recruiter(name, id) {
    var name = name;
    var id = id;
    
    function displayOn(aDisplay) {
        var recruiter = [
            'ID: ', id.represent(),
            ' / Name: ', name.represent()
        ].join('');
        aDisplay.display(recruiter);
    }

    return {
        displayOn : displayOn
    };
}
