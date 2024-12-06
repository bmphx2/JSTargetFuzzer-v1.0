new Float64Array(6);
new BigInt64Array(6);
new BigUint64Array(8);
function f15() {
}
const v19 = [-1000000.0,f15,-807.6596022618603,-1000000.0];
const v21 = [[v19,-1000000.0,0.014069366437978514,v19],f15,-807.6596022618603];
const v27 = Date.now;
Reflect.apply(v27);
function* f29(a30, a31, a32, a33) {
    let v34;
    try { v34 = (6.660116908560646).o(a30, "object"); } catch (e) {}
    const o35 = {
        "construct": v34,
        "__proto__": a32,
        "preventExtensions": f15,
    };
    new Proxy(v21, o35, 2727);
    yield* v34;
    return a30;
}
f29(-807.6596022618603, "U7O", "U7O", v27);
