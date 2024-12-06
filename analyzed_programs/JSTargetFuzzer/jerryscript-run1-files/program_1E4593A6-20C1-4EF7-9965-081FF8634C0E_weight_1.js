function f5() {
    return Float64Array;
}
const t3 = 1000;
t3[2] = 8;
f5();
const v7 = new Float64Array(1);
function f10(a11, a12) {
    v7.byteLength = 10;
    function F13(a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = v7;
        this.d = a15;
        this.h = a16;
    }
    const v18 = new F13(10, 1000, 1000);
    new F13(a11, -5, v18);
    const v20 = new F13(10, a12, 8);
    return v20;
}
f10(1, 1);
new Float32Array(10);
new Uint8Array(1328);
const v27 = new Date();
v27.toTimeString();
