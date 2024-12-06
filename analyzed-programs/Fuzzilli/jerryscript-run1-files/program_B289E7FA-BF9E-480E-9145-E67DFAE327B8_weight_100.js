new Float32Array(255);
new Int8Array(2813);
const v11 = new Uint16Array(4096);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a16;
}
const v17 = new F12(4096, -1n, 2813);
const v18 = new F12(4096, v17, 4096);
const v19 = new F12(2813, v18, F12);
const o20 = {
    __proto__: v11,
    "a": v18,
    "g": 0n,
    [0n]: v17,
};
try { v18(-1n, v11, o20, o20); } catch (e) {}
v19.e = delete v18[268435440];
delete v17[7];
