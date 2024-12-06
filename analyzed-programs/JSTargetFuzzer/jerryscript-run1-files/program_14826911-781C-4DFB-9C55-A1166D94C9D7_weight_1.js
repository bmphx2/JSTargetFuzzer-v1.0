let v9 = 0;
do {
    v9++;
} while (v9 < 2)
const v20 = new Uint8Array(Uint8Array, Uint8Array);
const v22 = new Int8Array();
const v25 = new Float64Array();
function f26() {
    return v25;
}
function f27(a28, a29, a30) {
    const o40 = {
        get d() {
            function f32() {
                return a28;
            }
            return f26;
        },
        get e() {
            function F34(a36, a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F34(64, a28, v20);
        },
        [f26]: v22,
    };
    return o40;
}
const v41 = f27(64, v22, Int8Array);
const v42 = f27();
f27(v42, v22, v42);
(1000000000.0)[Symbol.isConcatSpreadable];
for (let v47 = 0; v47 < 5; v47++) {
    v41["p" + v47] = v47;
}
