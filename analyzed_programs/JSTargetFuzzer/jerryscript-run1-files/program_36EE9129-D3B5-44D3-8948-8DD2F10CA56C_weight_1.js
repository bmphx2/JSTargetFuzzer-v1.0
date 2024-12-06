function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
    this.f = 1;
    this.h = 1;
}
new F0();
const v4 = new F0();
v4[6] = F0;
v4 > F0;
new F0();
[-1000000000.0,3.0,2.0,0.31604859306364774];
[1.0,5.0,-592.7169764262987,-2.220446049250313e-16];
[0.20698683053364852,-403.2402901456327];
const o22 = {
    set a(a20) {
    },
    get a() {
        return this;
    },
};
