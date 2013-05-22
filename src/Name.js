function Name(name) {
    var name = name;

    function displayName(display) {
        display(name);   
    }

    return {
        displayName : displayName
    };
}
