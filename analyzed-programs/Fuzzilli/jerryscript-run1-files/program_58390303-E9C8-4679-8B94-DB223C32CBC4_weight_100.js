function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 257;
    this.g = 257;
    this.b = 257;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Uint16Array(256);
const v14 = new Uint16Array(3);
new BigInt64Array(512);
const v18 = v5[257];
let v19;
try { v19 = v14.reduce(v18, v18); } catch (e) {}
const v21 = Symbol.unscopables;
v19[v21] = v21;
delete v3[1657863017];
const t17 = "getTime";
t17[16] *= 536870889;
