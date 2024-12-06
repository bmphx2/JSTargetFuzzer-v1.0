function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 536870889;
    this.a = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v3,v3];
[F0];
[v5,v4,v4,v6];
const v16 = Symbol.toPrimitive;
const o22 = {
    [v16]() {
        this / v4;
        -Infinity;
        return 2.0;
    },
};
