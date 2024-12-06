const v7 = new WeakMap();
const v10 = new Int8Array(4096);
const v13 = new Int32Array(4);
new Float64Array(1701);
const v17 = (a18, a19) => {
    const o20 = {
    };
    new Proxy(v10, o20);
    return a18;
};
delete v7[v13];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a28;
}
new F25(-1.0, 4096);
new F25(-1.0, -4294967297);
new F25(-1.0, 1701);
