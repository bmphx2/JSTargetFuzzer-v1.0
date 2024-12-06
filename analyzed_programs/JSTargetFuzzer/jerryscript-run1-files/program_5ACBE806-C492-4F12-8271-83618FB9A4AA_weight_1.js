function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4;
    this.b = 4;
    this.c = 4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
new F6(F6, v3);
const v11 = new F6(F6, v4);
const v12 = new F6(v5, v4);
[6,-128,9,512992205,52637,4294967297,805091516,1826277753];
[-12582,536870912,1621189485,-4294967297];
[-50816420,-9223372036854775808,-1,-17028,268435439,536870889];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.c = a18;
}
const v20 = new F16(v4, v3);
new F16(v12, F0);
new F16(v20, v11);
const v24 = Function();
const v27 = new Float32Array(127);
v27["filter"](v24);
