function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435439;
    this.g = 268435439;
    let v3 = 41365n;
    -(v3--);
    new BigInt64Array(3693);
    const v10 = [4,4,4,4,4];
    const v12 = 4 / 0;
    v12 < v10[903];
}
const v15 = new F0();
const v16 = new F0();
const v17 = new F0();
function f18(a19, a20) {
    const o26 = {
        "e": v15,
        "g": F0,
        "f": v15,
        [v15]: v17,
        "c": v16,
        "d": a19,
        __proto__: v17,
        [F0]: v17,
        "a": a19,
        ...a20,
        p(a22, a23, a24) {
            super.d;
            return v17;
        },
        "b": F0,
        [v16]: a20,
    };
    return o26;
}
f18(v16, v17);
const v28 = f18(F0, v17);
f18(v28, v28);
`multiline${7}bigint`;
