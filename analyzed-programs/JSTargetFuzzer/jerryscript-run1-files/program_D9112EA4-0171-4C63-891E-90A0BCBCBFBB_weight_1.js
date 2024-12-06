function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4294967295;
}
new F0();
const v4 = new F0();
new F0();
function f6() {
    return v4;
}
new Int8Array(7);
const v12 = new Int16Array(1024);
v12.toString = f6;
const v19 = new Float32Array(6);
try {
    for (const v21 of "preventExtensions") {
        break;
    }
} finally {
    v12[7] = v19;
    new Int16Array(65536, 268435456);
}
