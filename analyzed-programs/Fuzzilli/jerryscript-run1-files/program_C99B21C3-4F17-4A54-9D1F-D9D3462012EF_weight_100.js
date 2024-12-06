function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = null;
    this.g = null;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7) {
    const o13 = {
        "e": a7,
        get h() {
            const v9 = v4 >> F1;
            typeof a7 === "undefined";
            return v9;
        },
        ...a7,
        "c": v3,
        "a": v5,
    };
    return o13;
}
f6(v3);
f6(v3);
const v16 = f6(v4);
v5[Symbol.iterator];
v16.c = f6;
const o25 = {
    "maxByteLength": 1176,
};
const v27 = new SharedArrayBuffer(1176, o25);
new Int32Array(v27);
