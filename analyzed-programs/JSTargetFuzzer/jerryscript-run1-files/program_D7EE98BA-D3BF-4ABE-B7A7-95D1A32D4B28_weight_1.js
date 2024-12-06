const v2 = new RegExp(4);
const v5 = new BigInt64Array(1000);
const v8 = new Uint8ClampedArray(73);
[v8,v8,1000,v8];
[v5];
[4,4,73,v2,BigInt64Array];
async function f12(a13, a14) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        F15();
    }
    class C21 extends F15 {
        constructor(a23, a24, a25) {
            super(a13, a13);
        }
    }
    new C21(C21, F15, a14);
    return C21;
}
f12();
