function f6(a7, a8, a9, a10) {
    const o19 = {
        "c": 2,
        "h": 2,
        [11]: a8,
        "d": -5,
        set b(a12) {
            a12?.[64];
            this[-5];
        },
        "g": 9007199254740991,
        get b() {
            return a9;
        },
    };
    return o19;
}
const v20 = f6(9223372036854775807, 9007199254740991, 9007199254740991, 2);
f6(9223372036854775807, 11, 2, 2);
f6(2, -5, 11, 9223372036854775807);
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a26;
}
new F23(F23, 9007199254740991);
new F23(v20, 2);
new F23(2, 9007199254740991);
const o35 = {
    "maxByteLength": 6,
};
const v37 = new ArrayBuffer(3, o35);
new Float32Array(v37);
