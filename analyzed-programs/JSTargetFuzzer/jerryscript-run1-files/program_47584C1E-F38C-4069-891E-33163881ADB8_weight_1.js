new Float32Array(0);
new Uint8Array(128);
new Float64Array(4096);
async function f12(a13, a14) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        F15();
    }
    class C21 extends F15 {
        constructor(a23, a24, a25) {
            super(a25, F15, "-53040");
        }
    }
    new C21(C21, F15, a14);
    return C21;
}
f12();
