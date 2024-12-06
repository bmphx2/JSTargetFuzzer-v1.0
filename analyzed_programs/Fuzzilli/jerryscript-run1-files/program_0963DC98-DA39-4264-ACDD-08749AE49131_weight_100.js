function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483649;
    this.e = 2147483649;
    this.b = 2147483649;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[-24065,29071,268435456,-256,129,257,-1000490422,6,16];
[-1518543767,11,4294967296];
const v17 = [2,-536870912,14,65537,-1798492234,-1207787194,-2147483648,-1581730453,16];
function f18(a19) {
    return v17;
}
class C20 extends f18 {
    #b = v5;
    static 7;
}
C20[Symbol.species] = v4;
