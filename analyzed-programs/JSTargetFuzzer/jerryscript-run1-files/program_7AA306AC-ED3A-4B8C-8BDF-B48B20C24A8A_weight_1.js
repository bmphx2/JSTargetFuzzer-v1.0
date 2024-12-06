const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = WeakSet;
    this.g = a4;
}
const v5 = new F2(v1);
const v6 = new F2(v5);
const v7 = new F2(v6);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
    this.g = v1;
    this.c = v6;
}
new F8(v6, v6, v7);
new F8(v1, v5, v7);
new F8(v7, v7, v5);
new Uint8Array(128);
new Uint8Array(34);
new Uint16Array(7);
const o28 = {
    m(a27) {
        [] = this;
        return 39946;
    },
};
try { o28.m(); } catch (e) {}
