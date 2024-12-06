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
const o17 = {
    ...undefined,
};
[,];
function f20() {
}
const v24 = [-1000000.0,f20,-807.6596022618603,-1000000.0];
const v25 = [v24,-1000000.0,0.014069366437978514,v24];
const v26 = [v25,f20,-807.6596022618603];
function* f30(a31, a32, a33, a34) {
    try { a33.padStart(a31, "object"); } catch (e) {}
    const o36 = {
        "construct": 0.014069366437978514,
        "ownKeys": f20,
        "preventExtensions": f20,
    };
    new Proxy(v26, o36);
    yield* a32;
    return Proxy;
}
f30(-807.6596022618603, "U7O", "U7O", v25);
