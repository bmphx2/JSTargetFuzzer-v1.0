function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 268435440;
    this.d = 268435440;
    this.a = 268435440;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Uint32Array(1767);
const v11 = new Uint8ClampedArray(3);
new Uint8ClampedArray(13);
class C16 extends Uint8ClampedArray {
    static #a = v11;
    [13] = v3;
    static 3 = v5;
    e = undefined;
}
new C16();
new C16();
const v19 = new C16();
const o20 = {
};
new Proxy(v19, o20);
