function f0() {
}
const v1 = [f0,f0];
const v2 = [v1,v1,v1,v1];
try { Reflect.preventExtensions(); } catch (e) {}
const o5 = {
};
([5]).splice();
const v8 = [v1,f0,v1,v1,f0];
function f9(a10, a11) {
    const o28 = {
        [a10](a13, a14) {
            this[a13] = a14;
            const v17 = `
                const t14 = "valueOf";
                delete t14?.d;
            `;
            eval(v17);
            Math.random();
            -"vFNw";
            !a14;
            ~a14;
            return a11;
        },
        "g": a10,
    };
    return o28;
}
const v29 = f9(f0, v2);
const v30 = f9(v29, v2);
const v31 = f9(f9, v1);
function f32(a33, a34, a35, a36) {
    const o48 = {
        "d": v29,
        __proto__: a33,
        "e": v30,
        "a": v31,
        "h": v30,
        256: a35,
        [v8]: a34,
        "f": a34,
        [v30]: f9,
        "g": a35,
        "c": a34,
        "b": v31,
        3547801779: a35,
        2688: v1,
        m(a38, a39, a40) {
            super.e = a35;
            return a40;
        },
        p(a42, a43) {
            Reflect.deleteProperty(("object").asyncIterator);
            return a42;
        },
    };
    return o48;
}
f32(v8, v8, v8, v29);
f32(v8, v8, v1, v29);
f32(v1, v1, v1, v29);
new Uint32Array(203);
new BigInt64Array(2179);
new Float32Array(15);
Math.acos(Math);
