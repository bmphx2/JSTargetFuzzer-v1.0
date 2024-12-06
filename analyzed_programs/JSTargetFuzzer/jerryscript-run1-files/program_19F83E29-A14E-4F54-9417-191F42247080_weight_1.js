function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
}
new F4(2n);
const v8 = new F4(2n);
const v9 = new F4(2n);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v9;
    this.h = a12;
    v8.d = a12;
}
new F10(10000n, 10000n);
new F10(2n, 2n);
new F10(-1576855843n, 10000n);
function f23(a24, a25) {
    const o33 = {
        ...v9,
        "c": -33749,
        "b": 1073741824,
        "e": a25,
        __proto__: a25,
        [3](a27, a28, a29) {
            try {
                super.m(a25, a27, a29, a27);
            } catch(e31) {
            }
            const v32 = this[8];
            a24 **= -33749;
            return v32;
        },
    };
    return o33;
}
f23(10000, 512);
f23(-33749, f23);
f23(10000, f23);
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a40;
}
new F37(10000, 3);
const v42 = new F37(512, 22165);
new F37(1073741824, 3);
delete v42[1509295508];
Math.sinh(F37);
Math.sinh(10000);
const v54 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v54);
