const v2 = new Uint8Array(129);
const v5 = new Int32Array(6);
const v8 = new BigUint64Array(4);
const v9 = BigUint64Array >>> v5;
try { v9(Int32Array, 129, v2, Uint8Array); } catch (e) {}
new WeakSet();
function f19() {
    let v21 = -8;
    const v22 = 6 || v9;
    6 + v22;
    const v24 = v21--;
    const v25 = v9 || v22;
    +v24;
    v22 / v25;
}
const v31 = [-1000000.0,f19,-807.6596022618603,-1000000.0];
const v32 = [v31,-1000000.0,0.014069366437978514,v31];
const v33 = [v32,f19,-807.6596022618603];
[3578,2099679102];
[0,-1068882570,-1073741824,-4096,129,98960627];
[-9007199254740991,9007199254740992,7,1352,1563443925,5,-63561,1352435084];
v8.length = 1073741823;
function* f41(a42, a43, a44, a45) {
    let v46;
    try { v46 = a44.padStart(a42, "object"); } catch (e) {}
    const o47 = {
        "construct": a43,
        "ownKeys": f19,
        "preventExtensions": a42,
    };
    new Proxy(v33, o47);
    yield* v46;
    return a42;
}
f41(-807.6596022618603, "U7O", "U7O", v32);
