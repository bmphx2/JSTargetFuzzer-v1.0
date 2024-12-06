function f0() {
    const o20 = {
        ..."random",
        ["random"](a5) {
            const o8 = {
                "maxByteLength": 64,
            };
            const v13 = [25938];
            Reflect.apply(("random").substring, "random", v13);
            const v17 = new ArrayBuffer(64, o8);
            new DataView(v17);
            return v17;
        },
    };
    return o20;
}
const v21 = f0();
f0();
const v23 = f0();
function f24(a25, a26) {
    const o27 = {
        __proto__: a26,
        ...a26,
        "g": a26,
        "d": v21,
        [a25]: a25,
        9: a26,
        "c": a25,
        "e": f0,
        "h": a25,
        [f0]: v23,
        "f": a25,
    };
    return a26;
}
const v28 = f24(f0, v23);
f24(v23, v23);
f24(v23, v28);
const v36 = new Uint16Array(1);
const v39 = new Float32Array(1000);
v21[Float32Array];
v36[f24];
function f43(a44) {
    return a44;
}
class C45 extends f43 {
    static [-19807n];
}
[];
const v51 = new Uint8Array(41);
function f52() {
    return v39;
}
new BigInt64Array(16);
new Uint16Array(14);
new Uint8Array(256);
let {"byteLength":v62,"byteOffset":v63,"length":v64,} = v51;
v51.c = 14;
with (v51.__proto__) {
    try { a(); } catch (e) {}
}
