const v2 = new Float32Array(189);
const v5 = new Int32Array(512);
const v8 = new Uint8ClampedArray(6);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.h = v2;
}
v8.__proto__ = v5;
v8.b = v8;
for (let v13 = 0; v13 < 32; v13++) {
    v2["p" + v13] = v13;
}
new F9(F9, v8);
new F9(v2, v2);
new F9(512, Int32Array);
const v22 = [65535n,0n,964329252n];
let v23 = [964329252n,964329252n,v22,v22];
const v24 = [v23,v23,v22,964329252n,0n];
const v25 = [65535n,v23];
[v24,0n];
const v27 = [v23];
const t22 = "fdNr";
t22[0] = 65535n;
let v34;
try {
const t0 = "localeCompare";
v34 = new t0(v22, v27, v27, 58270);
} catch (e) {}
async function* f35(a36, a37, a38) {
    ({"length":a36,...v23} = a37);
    yield v22;
    await a36;
    yield "fdNr";
    return a36;
}
f35(58270, v25, v34);
