function f12() {
}
const v16 = new Uint8Array(Uint8Array, Uint8Array);
const v18 = new Int8Array();
const v21 = new Float64Array();
function f22() {
    return v21;
}
function f23(a24, a25, a26) {
    const o34 = {
        get e() {
            function F28(a30, a31, a32) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F28(64, this, v16);
        },
        [f22]: v18,
    };
    return o34;
}
const v35 = f23(64, v18, v16);
const v36 = f23();
f23(v36, v18, v36);
v36[Symbol.isConcatSpreadable];
for (let v41 = 0; v41 < 5; v41++) {
    v35["p" + v41] = v41;
}
const v45 = [-1000000.0,f12,-807.6596022618603,-1000000.0];
const v46 = [v45,-1000000.0,0.014069366437978514,v45];
const v47 = [v46,f12,-807.6596022618603];
function* f51(a52, a53, a54, a55) {
    try { a54.padStart(a52, "object"); } catch (e) {}
    const o57 = {
        "construct": f12,
        "ownKeys": f12,
        "preventExtensions": f12,
    };
    new Proxy(v47, o57);
    yield* "object";
    return a52;
}
f51(-807.6596022618603, "U7O", "U7O", v46);
