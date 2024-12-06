function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1(f0);
function f6(a7) {
    const o19 = {
        "d": a7,
        ...a7,
        "h": f0,
        set b(a9) {
            let v11 = -11;
            const v12 = v11 || v11;
            const v13 = v11++;
            -v12;
            --v11 + v11;
            v13 & v11;
            Math.floor(v11);
        },
    };
    return o19;
}
f6(v4);
f6(v5);
f6(v5);
function f23() {
    return v5;
}
function f30(a31, a32) {
    const o40 = {
        ...a31,
        "c": a32,
        "b": 1073741824,
        "e": a32,
        __proto__: a32,
        [3](a34, a35, a36) {
            try {
                super.m(f23, a34, a36, a34);
            } catch(e38) {
            }
            let v39 = this[8];
            return v39 **= -33749;
        },
    };
    return o40;
}
f30(10000, 512);
f30(-33749, f30);
f30(3, f30);
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a47;
}
new F44(10000, 3);
const v49 = new F44(10000, 22165);
new F44(1073741824, 3);
delete v49[1509295508];
Math.sinh(F44);
Math.sinh(10000);
const v61 = 127 * 3;
v61 >> -1000000000.0;
Math.atan(v61);
