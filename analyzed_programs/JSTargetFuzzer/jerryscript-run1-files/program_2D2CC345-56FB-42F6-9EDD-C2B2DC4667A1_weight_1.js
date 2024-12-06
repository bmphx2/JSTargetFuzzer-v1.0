function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 3307;
}
new F0();
new F0();
new F0();
function f6() {
    return F0;
}
const o12 = {
    m(a9, a10, a11) {
        super.c = Date;
        return Date;
    },
};
Reflect.apply(o12.m);
[2,11,1381130723];
[-31045,839614946,9007199254740991];
[-15,13,5,-12];
let v28 = 0n;
v28 &= v28;
