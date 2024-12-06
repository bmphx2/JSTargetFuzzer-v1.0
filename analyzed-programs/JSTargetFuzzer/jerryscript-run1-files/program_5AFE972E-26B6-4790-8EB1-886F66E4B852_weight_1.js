function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v5;
    this.e = a9;
}
const v11 = new F7(v3, v3);
new F7(v5, v4);
new F7(v5, F0);
const v20 = [65535n,0n,964329252n];
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v11;
}
new F21(10000, v5);
new F21(10000, v3);
new F21(10000, v5);
let v28 = [964329252n,964329252n,v20,v20];
const v29 = [v28,v28,v20,964329252n,0n];
const v30 = [65535n,v28];
[v29,0n];
const v34 = new BigUint64Array(190);
const v37 = new Float32Array(3619);
const v40 = new Int16Array(9);
const v41 = [v40];
const t34 = "fdNr";
t34[0] = 65535n;
let v48;
try {
const t0 = "localeCompare";
v48 = new t0(v20, v41, v41, 58270);
} catch (e) {}
v37.byteLength;
v48 = v34;
async function* f53(a54, a55, a56) {
    ({"length":a54,...v28} = a55);
    yield v20;
    await a54;
    yield "fdNr";
    return a54;
}
f53(58270, v30, v48);
