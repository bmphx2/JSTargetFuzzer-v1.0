let v0 = "q";
function f9(a10, a11, a12) {
    const o19 = {
        __proto__: v0,
        ...a10,
        [-1]: -65537n,
        "c": a10,
        set b(a14) {
            {
                v0[-2];
                v0 ^= "symbol";
            }
        },
        ..."symbol",
    };
    return a12;
}
f9("min", 4535, -65537n);
f9(f9, -1073741824, 1121221562n);
f9(v0, 4535, 1121221562n);
async function f26(a27, a28) {
    function F29(a31, a32, a33) {
        if (!new.target) { throw 'must be called with new'; }
        F29();
    }
    class C35 extends a27 {
        constructor(a37, a38, a39) {
            super();
        }
    }
    const v40 = new C35(C35, F29, a28);
    return v40;
}
f26();
