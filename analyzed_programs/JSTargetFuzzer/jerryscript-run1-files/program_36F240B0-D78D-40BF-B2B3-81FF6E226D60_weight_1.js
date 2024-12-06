function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.g = a5;
}
new F3(509247059);
new F3(4294967296);
const v8 = new F3(4294967296);
function f18() {
}
const v22 = [-1000000.0,f18,1000000000000.0,1.4767337870382631e+307];
const v23 = [v22,-1000000.0,0.014069366437978514,v22];
const v24 = [v23,f18,1000000000000.0];
function* f28(a29, a30, a31, a32) {
    try { a31.padStart(a29, "dotAll"); } catch (e) {}
    const o34 = {
        "construct": f18,
        "ownKeys": f18,
        "h": a29,
    };
    const v36 = new Proxy(v24, a32);
    yield* v36;
    return v8;
}
f28(-807.6596022618603, "U7O", "U7O", v23);
