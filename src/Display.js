function Display() {

    function display(info) {
        console.log(info);
    }

    function test(info) {
        return info;
    }

    return {
        display : display,
        test : test
    }
}
