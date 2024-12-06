class C3 {
    m(a5, a6) {
        const v8 = new Set();
        return v8;
    }
    static valueOf(a10) {
        const o13 = {
            "maxByteLength": 3491910667,
        };
        const v15 = new SharedArrayBuffer(8, o13);
        new Int8Array(v15);
        return Int8Array;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
const v22 = new Map();
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a29;
    this.c = a31;
    this.e = a28;
}
new F26("b", v22, v20, "UTC");
const v33 = new F26("b", v22, v20, "n");
const v34 = new F26("c", F26, v33, "o");
const t27 = "o";
delete t27[v22];
function f36(a37, a38) {
    const o39 = {
        "g": a37,
        "d": a38,
    };
    return o39;
}
f36("n", v20);
f36(C3, v34);
f36(v19, v18);
