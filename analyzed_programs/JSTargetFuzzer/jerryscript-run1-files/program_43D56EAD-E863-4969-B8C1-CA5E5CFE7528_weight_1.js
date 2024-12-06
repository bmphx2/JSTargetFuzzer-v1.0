const v3 = [65537];
const v4 = [4096,v3,65537,4096];
const v5 = [4096,v4,v4,4096];
function f10() {
    return v5;
}
function f11(a12, a13, a14, a15) {
    const o21 = {
        set e(a17) {
            if (a17) {
                delete this[2073366244];
            } else {
                f10 instanceof a17;
            }
            -49077 * a12;
        },
        65535: v4,
        "a": a15,
        "b": f10,
        "e": a14,
        __proto__: v5,
        ...a15,
        [2073366244]: a15,
        [v4]: a13,
        "b": v4,
        "e": a14,
        "c": 536870887,
    };
    return -49077;
}
f11(v4, v4, v3, 536870887);
f11(v3, v3, v5, 65537);
f11(v3, v5, v4, 65537);
const v30 = new Array(undefined);
const v33 = new Uint32Array(2334);
new Uint32Array(Uint32Array);
new Int16Array(129);
const v43 = `
    Uint32Array >= Uint32Array;
    let v45;
    try { v45 = v33.join(v43); } catch (e) {}
    v30[v45];
`;
eval(v43);
