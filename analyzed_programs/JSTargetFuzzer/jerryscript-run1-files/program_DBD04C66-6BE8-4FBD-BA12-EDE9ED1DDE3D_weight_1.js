const v1 = new WeakSet();
function f5(a6) {
    const o12 = {
        "g": a6,
        "c": v1,
        "h": v1,
        get e() {
            this >>> 1073741824;
            return 1073741823;
        },
    };
    return o12;
}
f5(1073741823);
f5(f5(f5));
function f25(a26, a27) {
    const o35 = {
        ...a27,
        "c": a27,
        "b": 1073741824,
        "e": a27,
        __proto__: a27,
        [3](a29, a30, a31) {
            try {
                super.m(a27, a29, this, a29);
            } catch(e33) {
            }
            const v34 = this[8];
            a26 **= -33749;
            return v34;
        },
    };
    return o35;
}
f25(10000, 512);
f25(-33749, f25);
f25(3, f25);
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
}
new F39(10000, 3);
const v44 = new F39(512, 22165);
new F39(22165, 3);
delete v44[1509295508];
Math.sinh(F39);
Math.sinh(3);
const v56 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v56);
