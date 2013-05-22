function Id(id) {
    var id = id;

    function displayId(display) {
        display(id);
    }

    return {
        displayId : displayId
    };
}
