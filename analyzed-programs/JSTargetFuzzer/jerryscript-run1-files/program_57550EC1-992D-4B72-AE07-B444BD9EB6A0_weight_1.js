function f5() {
    return f5;
}
function f7() {
    let {...v9} = arguments;
    return Map;
}
const o15 = {
    "g": Int8Array,
};
const v16 = o15.g;
ArrayBuffer.isView(v16);
function f19(a20, a21, a22) {
    const o32 = {
        "e": a22,
        [a21]: 31988,
        "c": "function",
        [a21](a24, a25, a26, a27) {
            a24[Symbol.species] = a25;
            return this;
        },
        "a": 4096,
        get g() {
            return this;
        },
        p() {
            this[v16] = this;
            return v16;
        },
        "h": 268435456,
    };
    return o32;
}
f19(4096, "function", 31988);
f19(-47677, "function", 1024);
f19(1024, "function", -268435456);
gc(10000);
