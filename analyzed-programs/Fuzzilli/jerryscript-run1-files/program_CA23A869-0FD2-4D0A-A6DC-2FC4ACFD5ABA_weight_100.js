function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 16;
    this.g = 16;
    this.f = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v3];
[v3,v3,[F0],v4];
try { v5.getFloat64(536870888, 536870888); } catch (e) {}
const o19 = {
    valueOf() {
        new WeakSet();
        return 9223372036854775807;
    },
};
