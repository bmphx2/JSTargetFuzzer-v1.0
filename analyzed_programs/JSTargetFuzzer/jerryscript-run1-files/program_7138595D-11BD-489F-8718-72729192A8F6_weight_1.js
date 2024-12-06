function f0() {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v5 = new F1();
    const v7 = new Map();
    function f8() {
        return v5;
    }
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v15 = new F9(f8, v5, v7, Map);
    [f8,,v5,v15] = v7;
    let v16 = 720466.0609275461;
    const o32 = {
        get a() {
            v16 = -1.0;
            new Map();
            return this;
        },
        "g": -1.0,
        "c": v16,
        get f() {
            const v25 = new Uint8ClampedArray(16);
            new Float32Array(16);
            new Uint8ClampedArray(219);
            return v25;
        },
    };
    return o32;
}
const v33 = f0();
const v34 = f0();
const v35 = f0();
function f39(a40, a41, a42, a43) {
    const o49 = {
        __proto__: v34,
        "e": f0,
        o(a45, a46, a47) {
            a45 ^ a47;
            a41[a45] |= a42;
            return f0;
        },
        [v34]: a42,
        ..."-2147483647",
        ...v34,
        715734894: v33,
        ...a41,
        "c": f0,
    };
    return o49;
}
const v50 = f39(v34, v34, v35, v35);
f39(v35, v35, f0, v35);
[f39,v34,[[f39(v34, v35, v34, "-2147483647"),v50,"string",v50,"-2147483647"],f39],v35];
const t54 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new t54();
