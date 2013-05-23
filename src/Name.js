function Name(name) {
    var name = name;
    
    function represent(display) {
        return display.test(name);  
    }

    return {
        represent : represent
    };
}


