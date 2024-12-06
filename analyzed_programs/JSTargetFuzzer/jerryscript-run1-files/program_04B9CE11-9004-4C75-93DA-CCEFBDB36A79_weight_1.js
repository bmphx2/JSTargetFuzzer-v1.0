const v2 = new Int32Array(129);
const v5 = new Int8Array(10);
new Uint8Array(5);
function f12(a13, a14, a15) {
    return a15;
}
class C16 extends f12 {
    static get f() {
        try {
            super.o(129, this, this);
        } catch(e19) {
        }
        return this;
    }
}
try { C16(); } catch (e) {}
function* f21(a22, a23, a24) {
    "-13" && "-13";
    Object.defineProperty("-13", v5[a22], { writable: true, configurable: true, enumerable: true, get: f12, set: f12 });
    yield* a24;
    return 10;
}
f21(Int32Array, 5, v2);
