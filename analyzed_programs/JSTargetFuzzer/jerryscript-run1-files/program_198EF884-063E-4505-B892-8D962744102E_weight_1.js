const v8 = new Float64Array(127);
const v11 = new Int32Array(5);
new Uint16Array(10);
const v15 = [-1.4322344581691674e+308];
const v16 = [0.9824621037580522,2.2889030652093406e+307,1.7976931348623157e+308,2.220446049250313e-16,4.0,-5.0];
function f17() {
    function F18(a20, a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a22;
    }
    new F18(127, 127, 127, v8);
    new F18(127, 127, -2147483649, v11);
    new F18(-2147483649, 5, 7, v8);
    return v16;
}
v15.filter(f17);
