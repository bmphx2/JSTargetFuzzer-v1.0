function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967296;
    this.a = -4294967296;
}
let v3 = new F0();
new F0();
new F0();
const o9 = {
    ...null,
};
const v13 = +-16;
const v14 = v13 ** -16;
const v16 = v3 >> (v3 && v13);
const v17 = Math.sin(v14);
const v18 = new Uint16Array(255);
let v20 = 0;
while (v20 < 4) {
    v3[5] = v16;
    const o23 = {
    };
    new Proxy(v18, o23);
    v18[15];
    v20++;
}
const v32 = new Int8Array(119);
const v35 = new Uint8ClampedArray(9);
v35.byteLength = v17;
v3++;
for (let v37 = 0; v37 < 32; v37++) {
    v32["p" + v37] = v37;
}
[-1.0,4.0,-1000000000.0,-2.0];
[-2.0,-2.2250738585072014e-308,100082.31216247706,-4.0,-1000000000000.0,1000000000000.0,49073.47079051961,-5.0,-835.2368386804205];
[2.220446049250313e-16,-253.69764064341723,-692396.475120831,-2.220446049250313e-16,-1.8975586210354738,1.5680801628474441,1000000.0];
let v44 = 58354n;
-2n ^ (v44 <<= 39655n);
