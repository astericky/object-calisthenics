function Id(id) {
    var id = id;

    function represent() {
       return id;  
    }

    return {
        represent : represent
    };
}
