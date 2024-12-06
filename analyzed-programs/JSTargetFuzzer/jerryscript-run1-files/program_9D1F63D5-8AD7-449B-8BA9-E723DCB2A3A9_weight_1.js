function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a7;
    const t5 = 1142276206n;
    t5.g = a7;
}
const v8 = new F4(268435441n, F4);
const v9 = new F4(268435441n, 1142276206n);
const v10 = new F4(1142276206n, 1073741823n);
const v11 = [1142276206n,268435441n,v9,v8];
[v8,v8,1142276206n];
[f0,v11,v10,v11];
function f17() {
}
const v21 = [-1000000.0,f17,-807.6596022618603,-1000000.0];
const v22 = [v21,-1000000.0,0.014069366437978514,v21];
const v23 = [v22,f17,-807.6596022618603];
function* f27(a28, a29, a30, a31) {
    try { a30.padStart(a28, "object"); } catch (e) {}
    const o33 = {
        "construct": 0.014069366437978514,
        "ownKeys": f17,
        "preventExtensions": f17,
    };
    new Proxy(v23, o33);
    yield* a29;
    return Proxy;
}
f27(-807.6596022618603, "U7O", "U7O", v22);
