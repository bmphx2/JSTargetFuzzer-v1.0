const v0 = [];
const v3 = new Uint8Array(9);
new TypeError(16, TypeError, v3);
new Float64Array(127);
new WeakMap();
new BigInt64Array(0);
new BigUint64Array(256);
new Int32Array(10);
const v23 = new Uint8Array(Uint8Array, Uint8Array);
const v25 = new Int8Array();
const v28 = new Float64Array(BigInt64Array, v0, Float64Array);
function f29() {
    return v28;
}
function f30(a31, a32, a33) {
    const o41 = {
        get e() {
            function F35(a37, a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F35(64, this, v23);
        },
        [f29]: v25,
    };
    return o41;
}
const v42 = f30(64, v25, v23);
const v43 = f30();
f30(v43, v25, v43);
v43[BigInt.isConcatSpreadable];
for (let v48 = 0; v48 < 5; v48++) {
    v42["p" + v48] = v48;
}
