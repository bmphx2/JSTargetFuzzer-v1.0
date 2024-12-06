function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1796209678;
    this.e = 1796209678;
    this.g = 1796209678;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11) {
    const o12 = {
        "h": v4,
        "f": a11,
        __proto__: v3,
        "b": 404164630,
        ...v5,
        256: -1696130655,
        "dotAll": v3,
        "size": v4,
        "a": v4,
        "byteOffset": -1696130655,
    };
    return o12;
}
f9(404164630, F0);
f9(-1696130655, 10000);
f9(404164630, F0);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    a19.__proto__ = this;
}
new F17(Uint16Array);
Uint16Array > Uint8Array;
Reflect.apply(Array.of);
