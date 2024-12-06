const v2 = new Int32Array(129);
new Int8Array(10);
new Uint8Array(5);
function f12(a13, a14, a15) {
    return a15;
}
class C16 extends f12 {
}
try { C16(); } catch (e) {}
function* f18(a19, a20, a21) {
    yield* a21;
    return 10;
}
f18(Int32Array, 5, v2);
