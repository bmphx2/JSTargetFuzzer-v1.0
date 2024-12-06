new BigInt64Array(7);
new Uint32Array(9);
new Uint32Array(2321);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
}
new F9(2321, 9, 7);
new F9(2321, 9, 2321);
new F9(2321, 9, 2321);
function f17() {
}
const v21 = [-1000000.0,f17,-807.6596022618603,7];
const v22 = [v21,-1000000.0,0.014069366437978514,v21];
const v23 = [v22,f17,-807.6596022618603];
function* f27(a28, a29, a30, a31) {
    try { a30.padStart(a28, "object"); } catch (e) {}
    const o33 = {
        "construct": f17,
        "ownKeys": f17,
        "preventExtensions": f17,
    };
    new Proxy(v23, o33);
    yield* "object";
    return a28;
}
function* f36(a37, a38, a39) {
    return yield -1000.0;
}
new Float32Array(f36());
f27(-807.6596022618603, "U7O", "U7O", v22);
