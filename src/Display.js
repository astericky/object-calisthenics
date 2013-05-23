function Display() {

    function display(data) {
        console.log(data);
    }

    function test(data) {
        return data;
    }

    return {
        display : display,
        test : test
    }
}
