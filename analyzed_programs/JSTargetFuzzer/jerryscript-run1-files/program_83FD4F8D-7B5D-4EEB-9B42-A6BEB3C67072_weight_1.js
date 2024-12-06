const v1 = new Set();
function f2(a3, a4) {
    const o12 = {
        "g": v1,
        ...a4,
        p(a6) {
            a3.length = -2;
            let v9 = super.a;
            v1[1];
            let v11 = print();
            ({"b":a4,"e":v9,"h":v11,} = a4);
            return v1;
        },
        __proto__: a4,
        "a": Set,
        [a4]: a4,
    };
    return o12;
}
const v13 = f2(Set, v1);
const v14 = f2(f2, Set);
const v15 = f2(f2, v14);
new Int16Array(3);
new Int32Array(5);
new BigUint64Array(11);
const v28 = new Int16Array(v15, 5, 5);
for (let v29 = 0; v29 < 32; v29++) {
    v13["p" + v29] = v29;
}
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v13;
    this.c = v28;
    this.b = a36;
}
new F32(BigUint64Array, -1067916289, v14);
new F32(-1067916289, 11, v14);
new F32(11, -1067916289, v14);
