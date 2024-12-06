function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.flags = -4294967295;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Date();
[v7,v5,[v7,v4,v5,F0],v7,F0];
[v4,v4];
const v16 = new Uint32Array(181);
let v18 = BigUint64Array;
let v19 = new v18(1);
let v20 = 253;
[v20,,v18,v19] = v16;
try { v18["abs"](181, v20, v18); } catch (e) {}
new Uint16Array(v20);
for (let i33 = 0; i33 < 2; i33++) {
    const v39 = new Function("x");
    v39.name;
}
Function();
