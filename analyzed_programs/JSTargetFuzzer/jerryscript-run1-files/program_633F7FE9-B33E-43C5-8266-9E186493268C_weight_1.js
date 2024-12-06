function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this[F0] = F0 / this;
    this[Symbol.unscopables] = undefined;
}
new F0();
new F0();
new F0();
new Float32Array(1024);
new Uint8ClampedArray(249);
new Int32Array(8);
const v24 = new Uint32Array(227);
async function f26(a27, a28, a29, a30) {
    v24[128] = 6n;
    return a27;
}
const v33 = new Int16Array(227);
async function f35(a36, a37, a38, a39) {
    v33[128] = 6n;
    return f35;
}
f35(227, f35, Int16Array, f35);
f26();
