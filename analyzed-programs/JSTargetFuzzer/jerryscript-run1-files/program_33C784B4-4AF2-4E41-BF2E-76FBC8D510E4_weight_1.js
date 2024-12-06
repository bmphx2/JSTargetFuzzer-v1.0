const v0 = -Infinity;
new Int8Array(0);
new Uint8Array(10);
new Int16Array(512);
const v14 = new Array(10);
let v16 = 4096;
function f18(a19, a20, a21, a22) {
    const o23 = {
        ...a22,
    };
    return o23;
}
let v24 = f18(v16, 481111932, 129, v14);
f18(10, 481111932, 10, f18);
f18(v24, v0, 481111932, v16);
v24.g;
try {
    let v28;
    try { v28 = v24.isSealed(); } catch (e) {}
    v24 = v28;
    v16 = v28;
} catch(e29) {
    e29[0] = e29;
    try { e29(Array); } catch (e) {}
}
