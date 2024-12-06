function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741824;
    this.b = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v6 = F0 >>> (v4 - v4);
delete v3[v3];
new F0();
const o9 = {
};
const o13 = {
    set h(a11) {
        with (Math) {
        }
    },
};
new Proxy(v3, o9);
const v16 = new F0();
function f20() {
    function f21(a22, a23, a24) {
        -12n & -14669;
        Number();
        v16[a22];
        a22 = a23;
        return a23;
    }
    f21(v4, v16, v6);
    return 2147483649;
}
function f32(a33, a34, a35, a36) {
    const o45 = {
        m(a38, a39, a40, a41) {
            a41.__proto__ = a40;
            return a38;
        },
        "a": 6552561,
        "b": a35,
        "e": 2147483649,
        "d": 2147483649,
        "g": f20,
    };
    return o45;
}
f32(5, v16, 5, v4);
f32(6552561, f20, 2147483649, f32(5, 5, 5, v3));
const v51 = new Int32Array(2083);
new Uint8Array(255);
const v57 = new Int16Array(7);
function f58(a59, a60, a61) {
    const o68 = {
        "h": Int32Array,
        set e(a63) {
            e = a60;
            [a61,a60];
            [v51];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v57,
        "b": Uint8Array,
        "c": 255,
        ...a59,
        1053877365: a60,
    };
    return o68;
}
const v69 = f58(2083, 255, 7);
const v70 = f58(v69, 7, 2083);
f58(f58, 255, 7);
v69[-2] &= 2083;
v57[-1] -= 7;
let v72 = 10;
for (; v72--;) {
    v70.h;
    v70[Symbol.toPrimitive] = 7;
}
