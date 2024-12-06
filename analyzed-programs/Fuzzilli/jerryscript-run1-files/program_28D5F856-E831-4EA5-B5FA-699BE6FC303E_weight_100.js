function f0() {
}
new Uint8ClampedArray(1);
const v6 = new Uint16Array(6);
new Uint8Array(127);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a15;
    this.a = a12;
    this.e = Uint8Array;
}
new F10(127, 1, 127, 1);
const v17 = new F10(6, 127, 6, 1);
const v18 = new F10(127, 1, 1, 127);
const v20 = Symbol.toPrimitive;
const o30 = {
    [v20]() {
        function F22(a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = this;
            this.c = v6;
            this.h = Uint8ClampedArray;
        }
        new F22(6, v18, 127);
        new F22(1, v17, 1);
        new F22(127, this, 127);
        return 127;
    },
};
