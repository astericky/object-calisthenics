function Name(name) {
    var name = name;

    function represent() {
       return name;  
    }

    return {
        represent : represent
    };
}


