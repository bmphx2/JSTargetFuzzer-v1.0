function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4;
    this.h = -4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Function();
function f11(a12, a13) {
    const o30 = {
        [v7]: a13,
        3: -8,
        set f(a15) {
            let v14 = this;
            a12 %= v3;
            v14 = a15;
            super.a = 15402;
        },
        [-9223372036854775807]: v4,
        [F0](a17, a18, a19, a20) {
            let {"a":v21,"f":v22,"h":v23,} = v5;
            function f24(a25, a26) {
                v3.__proto__ = v4;
                new WeakMap();
                return v3;
            }
            f24(a19, a18);
            return v4;
        },
    };
    return o30;
}
const v31 = f11(v4, -8);
const v32 = f11(v3, -9223372036854775807, f11, -9223372036854775807, v4);
f11(v3, -8);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a36;
    this.f = v32;
}
const v40 = new F34(v32, v7, 15402, v4);
const v41 = new F34(v40, v31, 15402, v5);
new F34(v41, v41, -8, v4);
new BigInt64Array(256);
const v51 = new Uint32Array(227);
new Uint16Array(129);
function F55(a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a58;
}
new F55(256, 129);
new F55(v51, 227);
new F55(v51, 129);
function f62() {
}
new Uint8Array(227);
let v76 = RegExp.bind("2147483647", [10000]);
new Int32Array(v76);
v76 /= v76;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
