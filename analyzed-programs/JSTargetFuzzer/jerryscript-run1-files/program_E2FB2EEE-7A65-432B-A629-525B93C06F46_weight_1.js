new Int16Array(3049);
new Int16Array(6);
new Float32Array(2336);
async function f12(a13, a14) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        F15();
    }
    class C21 extends F15 {
        constructor(a23, a24, a25) {
            super();
        }
    }
    const t13 = 2336;
    new t13(C21, F15, a14);
    return C21;
}
f12();
