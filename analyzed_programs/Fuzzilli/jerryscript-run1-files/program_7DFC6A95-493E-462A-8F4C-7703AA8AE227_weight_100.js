function f3(a4, a5) {
    const o16 = {
        ...-1,
        __proto__: a5,
        "d": a5,
        "h": 1073741824,
        "c": a5,
        [1073741824]: a5,
        "f": -65537,
        toString(a7, a8) {
            const o11 = {
                "maxByteLength": 4096,
            };
            const v13 = new ArrayBuffer(127, o11);
            new BigInt64Array(v13);
            return o11;
        },
    };
    return o16;
}
f3(1073741824, -65537);
f3(1073741824, 1073741824);
const v19 = f3(-1, -65537);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a22;
    this.c = -65537;
    this.g = a22;
}
const v24 = new F20(-65537, -65537);
new F20(-1, 1073741824);
const v26 = new F20(-65537, -1);
const v30 = f3 % v19;
function f31() {
    return v30;
}
v26 | v24;
128 + v24;
Math.log1p(v19);
11 + v19;
