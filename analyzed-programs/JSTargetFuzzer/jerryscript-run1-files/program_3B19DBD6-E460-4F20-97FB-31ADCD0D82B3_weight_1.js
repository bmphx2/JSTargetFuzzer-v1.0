new Int16Array(3286);
new Uint32Array(5);
new Float64Array(3286);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
new F12(2.2250738585072014e-308, 5);
new F12(-8.49655559114943, 5);
new F12(-8.49655559114943, 4);
const v22 = [65535n,964329252n,964329252n];
const v23 = [964329252n,964329252n,v22,v22];
const v24 = [v23,v23,v22,964329252n,0n];
const v25 = [65535n,v23];
[v24,0n];
const v27 = [Uint32Array];
const t16 = "fdNr";
t16[0] = 65535n;
let v34;
try {
const t0 = "localeCompare";
v34 = new t0(v22, v27, v27, 58270);
} catch (e) {}
async function* f35(a36, a37, a38) {
    ({"length":a36,...a38} = a37);
    yield v22;
    await a36;
    yield a37;
    return a36;
}
f35(58270, v25, v34);
