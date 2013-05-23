function Id(id) {
    var id = id;

    function display(IdDisplay) {
        IdDisplay.displayOn(id);
    }

    return {
        display : display
    };
}
