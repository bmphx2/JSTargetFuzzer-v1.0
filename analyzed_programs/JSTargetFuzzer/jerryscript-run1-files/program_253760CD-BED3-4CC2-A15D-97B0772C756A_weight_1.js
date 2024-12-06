function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740992;
    this.e = 9007199254740992;
    this.a = 9007199254740992;
}
new F0();
new F0();
const v5 = new F0();
new Float32Array(1604);
new Uint16Array(512);
new BigInt64Array(128);
const v21 = [65535n,0n,964329252n];
let v22 = [964329252n,964329252n,v21,v21];
const v23 = [v22,v22,v21,964329252n,0n];
const v24 = [-65536n,v22];
[v23,0n];
const v26 = [v23];
const t18 = "fdNr";
t18[0] = 65535n;
let v33;
try {
const t0 = "localeCompare";
v33 = new t0(v21, v26, v26, 58270);
} catch (e) {}
async function* f34(a35, a36, a37) {
    ({"length":a35,...v22} = a36);
    yield v21;
    await a35;
    yield "fdNr";
    return v5;
}
f34(58270, v24, v33);
