function f6(a7, a8) {
    const o21 = {
        "b": a8,
        ...-1024,
        set c(a10) {
            new Array(512);
        },
        __proto__: a8,
        "d": a7,
        toString(a15, a16) {
            delete this[-1908395560n];
            function f18(a19) {
                return a19;
            }
            class C20 extends f18 {
                [a15] = f18;
                #b;
                c = f18;
                g = a15;
            }
            return a8;
        },
    };
    return o21;
}
const v22 = f6(-1024, 28984);
const v23 = f6(512, -1024);
const v24 = f6(28984, 28984);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a29;
}
const v31 = new F25(512, v22, v24, -1024);
const v32 = new F25(28984, -1908395560n, v23, -1024);
let v33 = new F25(-1024, 28984, v24, -1024);
v22[v31] = 28984;
const o34 = {
    __proto__: v22,
    "a": f6,
    "h": v32,
    "g": v23,
};
v33 &= v32;
