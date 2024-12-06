function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9223372036854775807;
    this.g = 9223372036854775807;
    this.a = 9223372036854775807;
}
const v3 = new F0();
new F0();
new F0();
function f6(a7) {
    const o14 = {
        m(a9, a10) {
            let v8 = this;
            --v8;
            try {
                super.split(a10);
            } catch(e13) {
            }
            return a10;
        },
        "d": a7,
        __proto__: v3,
    };
    return o14;
}
f6(v3);
f6(f6);
f6(f6);
function f27(a28, a29) {
    const o45 = {
        ...a29,
        "c": a29,
        "b": 1073741824,
        "e": a29,
        __proto__: a29,
        [3](a31, a32, a33) {
            try {
                super.m(a29, a31, a33, a31);
            } catch(e35) {
            }
            const v36 = this[8];
            let v38 = 0n;
            function F39(a41, a42, a43, a44) {
                if (!new.target) { throw 'must be called with new'; }
                v38 /= 2n;
            }
            a28 **= -33749;
            return v36;
        },
    };
    return o45;
}
f27(10000, 512);
f27(-33749, f27);
f27(3, f27);
function F49(a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a52;
}
new F49(10000, 3);
const v54 = new F49(512, 22165);
new F49(1073741824, 3);
delete v54[1509295508];
Math.sinh(F49);
Math.sinh(10000);
const o66 = {
};
("-678718593").match(o66);
const v70 = new Date(Date);
v70.toUTCString;
const v72 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v72);
