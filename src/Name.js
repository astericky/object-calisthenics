function Name(name) {
    var name = name;

    function display(nameDisplay) {
       nameDisplay.display(name);   
    }

    return {
        display : display
    };
}
