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
            return F25(64, a21, v13);
        },
        [f19]: v15,
    };
    return o31;
}
const v32 = f20(64, v15, Int8Array);
const v33 = f20();
f20(v33, v15, v33);
(1000000000.0)[Symbol.isConcatSpreadable];
for (let v38 = 0; v38 < 5; v38++) {
    v32["p" + v38] = v38;
}
