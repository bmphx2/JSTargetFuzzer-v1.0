new Float64Array(6);
new BigInt64Array(2727);
new BigUint64Array(8);
function f15() {
}
const v19 = [-1000000.0,f15,-807.6596022618603,-1000000.0];
const v20 = [v19,-1000000.0,0.014069366437978514,v19];
const v21 = [v20,f15,-807.6596022618603];
function* f25(a26, a27, a28, a29) {
    try { a28.o(a26, "object"); } catch (e) {}
    const o31 = {
        "construct": f15,
        "__proto__": f15,
        "preventExtensions": f15,
    };
    new Proxy(v21, o31, 2727);
    yield* "object";
    return a26;
}
f25(-807.6596022618603, "U7O", "U7O", v20);
