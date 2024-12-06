function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -256;
    this.f = -256;
    this.c = -256;
}
new F0();
const v4 = new F0();
new F0();
function f6() {
    return v4;
}
const v8 = [];
const v10 = 1024 ** 1024;
const v11 = v8 << 1024;
v11 ** v10;
new Array(1);
[268435456,-65535,9223372036854775807];
Array(v11).__proto__;
Math.log(832041.3532798153);
Math.max(v8);
+4294967295;
[-12,3,1842,-2147483648,449351077,520765733,-1681213925,268435456,-5,3];
[-9223372036854775808,1,1,-2073240600,536870888,-859153786,-2147483648,1610570649];
const v34 = new Array(9);
const v37 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
-10 == 37397n;
const v50 = `
    Uint32Array >= Uint32Array;
    let v52;
    try { v52 = v37.join(v50); } catch (e) {}
    v34[v52];
`;
eval(v50);
