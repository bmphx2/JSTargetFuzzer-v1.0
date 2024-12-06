new Date();
const o11 = {
    "call": Date,
};
new Proxy(Date, o11);
const v17 = new Float64Array(123);
new Uint16Array(1);
new Float32Array(9);
const v25 = new Uint32Array(256, Uint32Array, 9n);
let v26;
try { v26 = Uint32Array(256, 256); } catch (e) {}
v17[4] = v17;
v25[256] |= 256;
v26 = Uint32Array;
const v33 = 256 / 256;
let v34;
try { v34 = v33(v33); } catch (e) {}
let v37 = new Float32Array(265);
const v40 = new Int8Array(2);
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 265;
    v34 = v37;
    let [,v45] = v40;
    v40[9] = a44;
    256 ** 256;
    try { new a43(256, v25, Int8Array, this); } catch (e) {}
    this.g = Uint32Array;
}
new F41(2, 265);
new F41(2, 265);
new F41(265, 265);
v34 instanceof F41;
[v37] = v40;
new Array(127);
const v59 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
v59.includes(v59[1286]);
