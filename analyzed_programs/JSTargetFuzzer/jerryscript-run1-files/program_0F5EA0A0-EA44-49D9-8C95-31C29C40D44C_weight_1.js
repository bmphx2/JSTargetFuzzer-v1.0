let v1 = Int32Array;
const v2 = new v1(12);
let v5 = new v1(12, 956, 956);
const v6 = delete v5[128];
try { v6(); } catch (e) {}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
    this.f = a10;
    this.c = a11;
}
const v12 = new F8(v2, 956);
new F8(956, v5);
new F8(v12, v12);
({"buffer":v1,"byteLength":v5,} = v5);
new Uint32Array(956);
const v21 = new Uint8Array(10);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor = v21;
    this.d = a25;
    this.ignoreCase = a24;
}
new F22(12, 12);
new F22(956, 956);
new F22(10, 12, v2);
let v29 = 0;
while (v29 < 2) {
    new Int16Array(128);
    new Float32Array(1);
    new Uint8Array(0);
    v29++;
}
new Uint32Array([6,17590]);
