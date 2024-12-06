function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.global = -4096;
    this.f = -4096;
}
const v3 = new F0(F0);
const v4 = new F0();
new F0(v4, v3);
[9007199254740990,-6,13,4294967296,9223372036854775807,-268435456,-174284437];
[23297,-9223372036854775808,4294967297,9,-8,536870887,-549677451,1];
const v10 = new Int8Array(4038);
const v11 = [v10,v10];
const v12 = [v11,v11];
const o17 = {
    p(a15, a16) {
        a16[1] = 5;
        return this;
    },
};
try { o17.p(); } catch (e) {}
function f19() {
    return f19;
}
class C20 extends f19 {
    constructor(a22, a23) {
        super();
        v12 % this;
    }
}
new C20(f19, v10);
[-3,257,-23882,-2147483649,9223372036854775807,2,-4294967296,1024];
function f27() {
    return v4;
}
const v32 = new Uint8Array();
v32.buffer["slice"](-7808);
