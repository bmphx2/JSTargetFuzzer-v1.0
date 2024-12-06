function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -9007199254740990;
    this.b = -9007199254740990;
    this.f = this;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,F0];
[v6,F0,v6,v3];
[v6,v4];
[2147483647,9223372036854775807,-9223372036854775807,268435441,-1602757718,169204284,1,0,128];
[255,1,512,4,-65537,-14,-1,-24028,16,370740904];
[268435439,73755181,6,-286656632,-13054,65535,3];
new Int16Array(8);
new Uint8ClampedArray(1939);
new Int8Array(7);
const v23 = new Uint32Array(181);
let v25 = BigUint64Array;
let v26 = new v25(1);
let v27 = 253;
[v27,,v25,v26] = v23;
try { v25["abs"](181, v27, v25); } catch (e) {}
new Uint16Array(v27);
for (let i40 = 0; i40 < 2; i40++) {
    const v46 = new Function("x");
    v46.name;
}
Function();
