function f6(a7, a8) {
    const o14 = {
        n(a10, a11, a12) {
            [...a12] = this.b;
            return a10;
        },
        "callee": -536870912n,
        __proto__: -4294967296n,
        "f": -490642.9654625968,
        "description": -843.3752512750254,
        ...a8,
    };
    return o14;
}
f6(-490642.9654625968, -4294967295n);
const v16 = f6(-843.3752512750254, -4294967296n);
f6(0.42322867137119957, -536870912n);
function f18() {
    let v19 = 0;
    while (v19 < 1) {
        v16.length = 2;
        v19++;
    }
}
const v27 = [-1000000.0,f18,-807.6596022618603,-1000000.0];
const v28 = [v27,-1000000.0,Infinity,v27,-4294967296n];
const v29 = [v28,f18,-807.6596022618603];
function* f33(a34, a35, a36, a37) {
    try { a36.padStart(a34, "c"); } catch (e) {}
    const o39 = {
        "construct": f18,
        "ownKeys": f18,
        "preventExtensions": f18,
    };
    new Proxy(v29, o39);
    yield* "c";
    return a34;
}
f33(-807.6596022618603, "U7O", "U7O", v28);
