function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 54252;
    this.h = 54252;
    this.g = 54252;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Float64Array(2973);
const v11 = new Int32Array(127);
const v14 = new BigUint64Array(16);
function f15(a16, a17, a18) {
    const o27 = {
        "c": a17,
        "a": a16,
        "f": Float64Array,
        5: v11,
        get e() {
            function f20(a21, a22) {
                const o23 = {
                    __proto__: v11,
                };
                return o23;
            }
            f20(v4, v5);
            f20(v3, f20(a18, v5));
            return a16;
        },
    };
    return o27;
}
f15(v3, v5, v4);
f15(v4, v3, v4);
f15(v5, v3, v5);
function f37(a38, a39) {
    const o47 = {
        ...a39,
        "c": a39,
        "b": 1073741824,
        "e": a39,
        __proto__: a39,
        [3](a41, a42, a43) {
            try {
                super.m(a39, a41, a43, a41);
            } catch(e45) {
            }
            const v46 = this[8];
            a38 **= -33749;
            return v46;
        },
    };
    return o47;
}
f37(10000, 512);
f37(-33749, f37);
f37(3, f37);
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a54;
}
new F51(10000, 3);
const v56 = new F51(512, 22165);
v14.buffer = v56;
var d = 3;
new F51(1073741824, 3);
delete v56[1509295508];
Math.sinh(F51);
Math.sinh(10000);
const v71 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v71);
