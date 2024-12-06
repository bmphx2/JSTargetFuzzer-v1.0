new Int32Array(64);
new Float64Array(255);
new Float32Array(1024);
function f21(a22, a23) {
    const o31 = {
        ...a23,
        "d": a23,
        "b": 1073741824,
        "e": a23,
        __proto__: a23,
        [3](a25, a26, a27) {
            try {
                super.m(a23, a25, a27, a25);
            } catch(e29) {
            }
            const v30 = this[700];
            a22 **= 10;
            return v30;
        },
    };
    return o31;
}
f21(10000, 512);
f21(10, f21);
f21(3, f21);
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a38;
}
new F35(10000, 3);
const v40 = new F35(512, 22165);
new F35(1073741824, 3);
delete v40[1509295508];
Math.sinh(F35);
Math.sinh(10000);
const v52 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v52);
