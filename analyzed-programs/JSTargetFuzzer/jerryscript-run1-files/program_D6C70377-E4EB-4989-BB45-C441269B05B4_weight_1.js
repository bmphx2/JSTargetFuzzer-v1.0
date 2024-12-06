function f0() {
    let v2 = -202378921;
    const o10 = {
        "c": 268435441,
        "g": v2,
        8: "a",
        get b() {
            v2 * 268435441;
            v2 /= 268435441;
            const v7 = [];
            Reflect.apply(("a").normalize, "a", v7);
            return v2;
        },
    };
    return o10;
}
const v11 = f0();
const v12 = f0(v11, f0);
const v13 = f0(v12, v12, v12);
function f17(a18, a19, a20) {
    const o27 = {
        [v12]: a18,
        __proto__: a19,
        m(a22, a23) {
            a20 in a18;
            function f25() {
                return f0;
            }
            try { v11.getSeconds(this); } catch (e) {}
            return a23;
        },
        [v13]: f0,
    };
    return o27;
}
f17(v12, v13, v13, -43569119, -43569119);
f17(v12, v11, v13);
f17(v13, v13, v12);
const v33 = new BigUint64Array(3);
3 in v33;
