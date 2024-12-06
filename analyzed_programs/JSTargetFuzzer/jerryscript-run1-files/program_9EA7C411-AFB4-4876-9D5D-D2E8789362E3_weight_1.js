const v13 = new Uint8Array(Uint8Array, Uint8Array);
const v15 = new Int8Array();
const v18 = new Float64Array();
function f19() {
    return v18;
}
function f20(a21, a22, a23) {
    const o31 = {
        get e() {
            function F25(a27, a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F25(64, this, v13);
            return Uint8Array;
        },
        [f19]: v15,
    };
    return o31;
}
f20(64, v15, v13);
const v33 = f20();
const v34 = f20(v33, v15, v33);
v33[Symbol.isConcatSpreadable];
for (let v38 = 0; v38 < 5; v38++) {
    const v40 = "p" + v38;
    function f41(a42, a43, a44) {
        return a44;
    }
    class C45 extends f41 {
    }
    try { C45(); } catch (e) {}
    v34[v40] = v38;
}
