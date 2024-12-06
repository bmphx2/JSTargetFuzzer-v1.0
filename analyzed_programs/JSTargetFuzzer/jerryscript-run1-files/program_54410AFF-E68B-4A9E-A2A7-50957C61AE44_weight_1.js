function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 6;
}
new F0();
new F0();
new F0();
new Uint8Array(695);
new Int8Array(104);
new Int32Array(257);
const v19 = new Set();
v19.entries() != 0;
