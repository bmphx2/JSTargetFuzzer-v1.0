const v2 = new Uint16Array(0);
const v5 = new Uint8ClampedArray(256);
const v6 = 256 === v5;
if (v6) {
} else {
    v2.byteOffset &= 0;
    try { v2(Uint16Array, 0, v6); } catch (e) {}
}
const v13 = new Int16Array(3);
const v14 = [v5,v13,256];
const v15 = [Uint8ClampedArray,v5];
[v14,v15,v15,Uint8ClampedArray,v15];
function f17() {
}
const v21 = [-1000000.0,f17,-807.6596022618603,-1000000.0];
const v22 = [v21,-1000000.0,0.014069366437978514,v21];
const v23 = [v22,f17,-807.6596022618603];
function* f27(a28, a29, a30, a31) {
    let v32;
    try { v32 = a30.padStart(a28, Uint8ClampedArray); } catch (e) {}
    const o33 = {
        "construct": f17,
        ...a30,
        "b": f27,
        ...a29,
        [v6]: v32,
        ...v2,
        "ownKeys": v32,
        "preventExtensions": a28,
        ..."toString",
        ..."toString",
        "g": f17,
        "f": "U7O",
        ...a31,
    };
    new Proxy(v23, o33);
    yield* "toString";
    return o33;
}
f27(-807.6596022618603, "U7O", "U7O", v22);
