const v5 = new BigUint64Array(64);
const v8 = new Int8Array(305);
const v11 = new Float64Array(2450);
const v13 = [15,[v5]];
const v14 = [v8,v13,v13];
const v18 = [65535n,0n,964329252n];
let v19 = [964329252n,964329252n,v18,v18];
const v20 = [v19,v19,v18,Float64Array,0n];
const v21 = [65535n,v19];
if (v21 > 268435456) {
    v14[65535n] = v11;
    new Set();
} else {
    try {
    const t0 = 268435456;
    t0(Int8Array, 15, -12, v11, BigUint64Array);
    } catch (e) {}
}
[v20,0n];
const v27 = [v19];
const t20 = "fdNr";
t20[0] = 65535n;
let v34;
try {
const t0 = "localeCompare";
v34 = new t0(v18, v27, v27, 58270);
} catch (e) {}
async function* f35(a36, a37, a38) {
    function F39(a41, a42, a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = a37;
    }
    new F39(-10, a36, "fdNr", 964329252n);
    const v46 = new F39("o", v18, 0n, 0n);
    new F39(v46, v46, v20, 964329252n);
    ({"length":a36,...v19} = a37);
    yield a37;
    yield await v14;
    return a38;
}
f35(58270, v21, v34);
