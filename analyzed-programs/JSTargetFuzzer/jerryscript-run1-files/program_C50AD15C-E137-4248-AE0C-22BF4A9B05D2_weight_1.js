new Int8Array(2815);
new Float32Array(221);
const v8 = new Uint32Array(7);
function f9(a10, a11, a12, a13) {
    const o20 = {
        "a": a11,
        ...v8,
        [221]: a13,
        __proto__: v8,
        1073741824: 7,
        "h": Uint32Array,
        n(a15, a16, a17, a18) {
            function f19() {
                return Int8Array;
            }
            return f19;
        },
    };
    return o20;
}
f9(221, 7, 7, 221);
f9(7, 7, 2815, 7);
f9(2815, 221, 221, 221);
const v26 = new BigUint64Array(3435);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = [F27,[v26]];
const v34 = `a${4.0}g`;
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
}
F35 += v32;
const v41 = [v34];
Reflect.apply(v32.join, v26, v41);
