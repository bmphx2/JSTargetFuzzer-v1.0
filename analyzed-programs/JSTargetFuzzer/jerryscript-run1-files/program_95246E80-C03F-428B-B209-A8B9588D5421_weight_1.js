function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 15;
    try {
    const t0 = 15;
    t0(F0, F0, this, this);
    } catch (e) {}
    const v5 = this != 15 ? this : 15;
    [[this,[F0,this,v5[v5],15],F0,F0]];
    this.h = 15;
    this.g = 15;
}
new F0();
new F0();
const v12 = new F0();
new Float32Array(34);
new Float32Array(10);
new BigUint64Array(7);
function f22() {
    return v12;
}
const v28 = [2036046200,-9223372036854775807,-61646];
v28[6] = -4n;
v28["map"](Array);
