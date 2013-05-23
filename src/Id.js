function Id(id) {
    var id = id;

    function represent(display) {
        return display.test(id);
    }

    return {
        represent : represent
    };
}
