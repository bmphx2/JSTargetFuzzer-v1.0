function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.byteLength = true;
}
const v3 = new F1();
new F1();
const v5 = new F1();
const v6 = [-1000000000000.0,-1000.0,0.6424223992544376,-1000000.0,-2.614183912219641,2.2250738585072014e-308,1.7976931348623157e+308,-2.0];
-Infinity;
v6 instanceof F1;
new Float64Array(255);
new Uint32Array(8);
new BigUint64Array(8);
const v20 = [-2.220446049250313e-16];
const o23 = {
    "maxByteLength": 11,
};
const v25 = new ArrayBuffer(11, o23);
new Int8Array(v25);
const v28 = [-0.0,5.0,114.94726898568547,-1.0,-9.899588297987085,-2.645085012465625];
const v30 = new Date();
[F1,v5];
const v32 = [v30,F1];
let {"h":v37,"length":v38,...v39} = [v20,v20,v32,v3,v32];
try { v28.fill(v37, v38, 54681); } catch (e) {}
async function f44(a45, a46) {
    class C47 extends a46 {
    }
    return C47;
}
f44();
