function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 15;
    this.g = 15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o17 = {
        __proto__: v3,
        [a7]: v4,
        o(a10, a11, a12) {
            a12[1583027939];
            a12[1906137511] = this;
            return v4;
        },
        2: F0,
        ...v5,
        "c": v4,
        "a": F0,
        [F0]: F0,
        "e": a8,
        ...v5,
        "h": F0,
    };
    return o17;
}
f6(v5, v5);
const v19 = f6(v3, v4);
const v20 = f6(v4, v19);
function f21() {
    return v3;
}
const v24 = new Uint8Array(255);
const v27 = 255 > f6 ? 255 : f6;
let v28;
try { v28 = v27(v19, v27, v24, v3); } catch (e) {}
const v29 = new f6(Uint8Array, v28);
delete v20[2];
new Uint8ClampedArray(256);
new Int8Array(1024);
const o37 = {
    "g": Int8Array,
};
ArrayBuffer.isView(o37.g);
const o41 = {
    __proto__: v29,
    "b": v29,
    "c": v19,
    "d": v20,
};
