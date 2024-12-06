function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.b = -4;
    const t4 = 845738167;
    t4.d = a5;
}
const v7 = new F3(-4, 256);
const v8 = new F3(256, 845738167, F3, -4);
new F3(-4, 256);
function f10(a11, a12, a13) {
    const o22 = {
        __proto__: a11,
        [845738167](a15, a16) {
            [3.0,-9.554486209455227,0.8030807627218205,5.0,-823307.425919805,3.0,-9.364004257623906,NaN,-283.6228685228401,0.8148286927665024];
            const v18 = [-2.0,-1000.0,289795.1793638442,-5.738854676839223];
            [8.652600581985553,3.0,-1000000.0,0.6592703253981016,934602.2133398394,2.220446049250313e-16,-980.8949362876558,-676.9111865724033];
            v18[v18] = v8;
            try { a11["object"]("object", a16, a12); } catch (e) {}
            return v8;
        },
        "e": a12,
        "b": a12,
        [F3]: -4,
    };
    ([]).reduceRight(SyntaxError, "number");
    return o22;
}
const v28 = f10(v8, F3, v7, 256, f10(v7, -4, v8), 256);
f10(v7, v28, v28);
new WeakMap();
function f32(a33) {
    return a33;
}
const o34 = {
};
let v36 = new Proxy(f32, o34);
v36 |= Proxy;
