function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.b = 25090;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v3;
    this.g = a8;
    this.c = v3;
}
new F6(v5);
const v10 = new F6(v4);
const v11 = new F6(v5);
new Int32Array(2878);
new Int16Array(v10);
new BigInt64Array(v5);
const v21 = [54783,-268435456,46487,11,-1059659455,16,65537];
[-9223372036854775807,-112563030,128,1073741825,-10,4,-27957,-1,4];
Int16Array[v10] = v21;
const o24 = {
    ...v11,
};
