function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Int8Array(16);
    function f6() {
        return 16;
    }
    v5.forEach(f6);
    this.d = 5;
    this.c = 5;
}
const v8 = new F0();
const v9 = new F0();
const v10 = new F0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    a13.g = a13;
}
new F11(v10);
new F11(v9);
new F11(v8);
new Int32Array(4);
new Float32Array(6);
new Uint8ClampedArray(10);
new Set([1073741825,10000,129,257,562671243,-128,5,1950358049,1862516392]);
