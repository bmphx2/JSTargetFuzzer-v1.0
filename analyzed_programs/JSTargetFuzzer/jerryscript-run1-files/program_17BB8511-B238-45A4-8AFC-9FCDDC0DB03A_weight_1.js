function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F0;
    this.e = 9007199254740991;
}
new F0();
new F0();
new F0();
new Uint8Array(329);
new Uint8Array(129);
new Uint16Array(4);
const o22 = {
    m(a19, a20, a21) {
        return this;
    },
};
o22.m;
Reflect.isExtensible(o22);
