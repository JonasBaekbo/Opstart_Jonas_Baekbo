function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        gange: function (x) {
            result *= x;
        },
        divider: function (x) {
            result /= x;
        },
        pi: function () {
            result = Math.PI * result;
        },
        square: function () {
            result = Math.sqrt(result);
        },
        result: function () {
            return result.toFixed(5);
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(5);
calc.add(3);
calc.sub(4);
calc.gange(5);
calc.divider(2);
calc.pi();
calc.square();
console.log(calc.result());