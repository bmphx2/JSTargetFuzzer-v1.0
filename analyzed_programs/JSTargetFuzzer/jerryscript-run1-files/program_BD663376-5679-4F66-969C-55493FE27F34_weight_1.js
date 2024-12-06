const v1 = new Map();
function f2(a3) {
    const o15 = {
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
                const o11 = {
                    get f() {
                        return this;
                    },
                    "f": v1,
                    1: a3,
                };
                return o11;
            }
            const v12 = f8(Map);
            f8(v12);
            f8(v1);
            return v12;
        },
    };
    return o15;
}
const v16 = f2(Map);
const v17 = f2(v1);
const v18 = f2(v16);
function f19(a20, a21) {
    const o22 = {
        __proto__: v16,
        "d": v17,
        [a20]: v18,
        ...a20,
        "a": v16,
        "c": a20,
        "g": a21,
        [v1]: v18,
        ...v16,
        96: Map,
        8: f2,
        "g": v17,
        [Map]: f2,
        [v18]: a21,
        "e": v18,
        ...v16,
        [v1]: a21,
        "e": a20,
        ...f2,
        [v16]: a21,
        "h": v18,
    };
    return o22;
}
f19(v16, f19(v16, v17));
f19(v16, v16);
const v30 = new BigUint64Array(11);
const v31 = v30[1];
const o32 = {
};
const v38 = new Uint8Array();
const t66 = eval(eval);
t66(v31);
String();
const v45 = v38.__proto__;
try { Math.imul(v45); } catch (e) {}
