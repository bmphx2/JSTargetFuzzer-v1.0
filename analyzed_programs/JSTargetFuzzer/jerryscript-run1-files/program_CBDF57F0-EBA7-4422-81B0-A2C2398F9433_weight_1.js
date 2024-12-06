const v1 = new Map();
function f2(a3) {
    const o14 = {
        [a3]: a3,
        ...f2,
        "c": a3,
        [f2](a5) {
            a5[Map] = this;
            v1[268435440];
            return this;
        },
        get e() {
            function f8(a9) {
                const o10 = {
                    "f": v1,
                    1: a3,
                };
                return o10;
            }
            const v11 = f8(Map);
            f8(v11);
            f8(v1);
            return v11;
        },
    };
    return o14;
}
const v15 = f2(Map);
const v16 = f2(v1);
const v17 = f2(v15);
function f18(a19, a20) {
    const o21 = {
        __proto__: v15,
        "d": v16,
        [a19]: v17,
        ...a19,
        "a": v15,
        "c": a19,
        "g": v16,
        [Map]: f2,
        [v17]: a20,
        "e": v17,
        ...v15,
        [v1]: a20,
        [v15]: a20,
        "h": v17,
    };
    return o21;
}
f18(v15, f18(v15, v16));
f18(v15, v15);
const v32 = new Uint8Array();
const v34 = v32.__proto__;
try { Math.imul(v34); } catch (e) {}
