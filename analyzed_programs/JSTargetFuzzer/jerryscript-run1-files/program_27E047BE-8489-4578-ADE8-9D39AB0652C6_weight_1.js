[];
new Array(92);
new Uint32Array(92);
new BigUint64Array(2);
new Float32Array(4096);
async function f13(a14, a15) {
    function F16(a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        a19();
    }
    class C22 extends F16 {
        constructor(a24, a25, a26) {
            super(C22);
        }
    }
    new C22(C22, F16, a15);
    return a15;
}
f13();
