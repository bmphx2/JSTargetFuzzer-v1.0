function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 61193;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        [a7]: v5,
        ...v5,
        "a": a8,
        [v3]: v5,
        get h() {
            try {
                super.getInt32(a7, this, this, v3);
            } catch(e11) {
            }
            return a7;
        },
    };
    return o12;
}
const v13 = f6(v5, v5);
const v14 = f6(v3, v5);
const v15 = f6(v5, v3);
[[v5,false,v14,v3,v5]];
[v4,v14,F0];
const v20 = f6(v4, v3);
Object.defineProperty(v5, 129, { writable: true, enumerable: true, get: f6, set: f6 });
const v21 = v20 == v13;
if (v21) {
    new Float32Array(5);
    new BigInt64Array(6);
    new Uint8Array(3735);
} else {
    v15 >= v21;
}
