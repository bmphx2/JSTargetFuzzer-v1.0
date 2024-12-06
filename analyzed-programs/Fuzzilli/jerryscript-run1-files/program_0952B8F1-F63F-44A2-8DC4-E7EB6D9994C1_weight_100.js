const v1 = new Map();
function f2(a3, a4) {
    const o5 = {
        [Map]: v1,
        65535: Map,
        "a": a4,
        "c": v1,
        "b": a3,
        "g": a4,
        "f": Map,
        __proto__: v1,
        6: a3,
        "h": a3,
    };
    return o5;
}
const v6 = f2(Map, v1);
let v7 = f2(v6, Map);
const v8 = f2(v1, f2);
v6.h;
v7 = v8;
for (const v16 in v1) {
    v7.a;
    for (let v18 = 0; v18 < 32; v18++) {
        v8["p" + v18] = v18;
    }
}
