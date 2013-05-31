function ConsoleDisplay() {

    function display(data) {
        console.log(data);
    }

    return {
        display : display,
    }
}

function EchoDisplay() {
    function display(data) {
        return data;
    }
    
    return {
        display: display
    }
}
