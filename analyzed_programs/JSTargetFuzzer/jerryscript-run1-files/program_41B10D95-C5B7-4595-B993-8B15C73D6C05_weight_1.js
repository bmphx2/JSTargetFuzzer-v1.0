const v1 = new Map();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    F2.f = a4;
    this.e = v1;
    this.c = a4;
}
new F2(Map);
new F2(v1);
const v7 = new F2(v1);
function f8() {
    return v7;
}
[-5];
[-4294967295];
[2147483648];
Math.trunc(0.0);
