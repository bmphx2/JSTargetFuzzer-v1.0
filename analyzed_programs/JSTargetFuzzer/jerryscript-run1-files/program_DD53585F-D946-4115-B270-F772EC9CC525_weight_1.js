const v0 = -Infinity;
new Int8Array(0);
const v8 = new Uint8Array(10);
const v11 = new Int16Array(512);
const v14 = new Array(10);
with (v8) {
    try { byteOffset(Int16Array, byteOffset, byteOffset, byteOffset, 454715.70394876436); } catch (e) {}
    Array.__proto__ = v11;
}
let v18 = 4096;
function f20(a21, a22, a23, a24) {
    const o26 = {
        get h() {
            this[a22] = a24;
            return v8;
        },
        "c": a21,
        ...a24,
    };
    return o26;
}
let v27 = f20(v18, 481111932, 129, v14);
f20(10, 481111932, 10, f20);
f20(v27, v0, 481111932, v18);
v27.g;
try {
    let v31;
    try { v31 = v27.isSealed(); } catch (e) {}
    v27 = v31;
    v18 = v31;
} catch(e32) {
    e32[0] = e32;
    try { e32(Array); } catch (e) {}
}
