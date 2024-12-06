const v1 = new Set();
const v3 = [false,false];
const v4 = [false,false,false,v3];
const v5 = [false,v4,v1,v4,v4];
new ArrayBuffer(v5);
new RegExp(116);
new BigUint64Array(3038);
new Int32Array(1);
try { v1.has(Int32Array); } catch (e) {}
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
    this.d = -9007199254740991;
}
new F21(116, 1, v3);
new F21(268435439, 116, v4);
new F21(-9007199254740991, -9007199254740991, v5);
v3.valueOf();
