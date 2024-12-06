const v5 = new Int8Array(512);
const v8 = new BigInt64Array(256);
const v11 = new Float64Array(241);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
}
const v18 = new F12(256, 16, 16, 241);
new F12(256, 257, 257, 16);
const v20 = new F12(256, 257, 256, 241);
let v21;
try { v21 = v18.valueOf(); } catch (e) {}
const v22 = [v18,512,v11,v20,v8];
const v23 = [v22,16,v22,241,241];
[v5,16,v23,v21,v23];
try { v23.map(v21); } catch (e) {}
v21 = BigInt64Array;
