function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 0;
    this.a = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5];
const v7 = [v6,F0];
[v6,v4,F0,v7];
[-317644.2185560651,-0.0,-1000000000.0,3.0,1000000.0,1.4091200567851826e+308,-0.9678196906437986];
[-2.0,1000000.0,6.460007208677769e+307,NaN,1000000.0];
[0.5122759260898745,5.0,Infinity,-545.9589484221432,0.6064589222148927,-1.7976931348623157e+308,-5.353256432226756,-Infinity,1000000000000.0,Infinity];
v4.f;
class C16 extends F0 {
    [v7] = v5;
    h = 9;
    [v3] = F0;
    static #b;
}
new C16();
new C16();
new C16();
