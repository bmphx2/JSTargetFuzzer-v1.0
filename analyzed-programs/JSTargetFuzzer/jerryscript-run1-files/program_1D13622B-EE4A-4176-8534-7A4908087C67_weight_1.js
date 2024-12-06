function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.resizable = 16;
    this.c = 16;
}
new F0();
const v4 = new F0();
new F0(v4);
new Int32Array(3095, F0);
new Uint32Array(2);
new Int8Array(256);
async function f18(a19, a20) {
    class C21 extends a20 {
    }
    return C21;
}
f18();
