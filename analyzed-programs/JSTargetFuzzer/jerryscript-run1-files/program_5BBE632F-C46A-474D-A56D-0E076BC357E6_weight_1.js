const v0 = [3.0,-79.47525650609771,-702629.2478667703,-2.2250738585072014e-308,3.0,Infinity,0.007240428712476432,426.34482869620774,-0.0];
const v1 = [-3.0,-1000000.0];
const v2 = [1e-15,1000000000.0,963.1568395482905,-Infinity,-3.0,-236759.81258611393,0.8499531968743151];
const v3 = [4,9007199254740992,1859847781];
const v4 = [-6];
const v5 = [4294967297,-9223372036854775807,-7,9007199254740991,1838025731,235524369,-9007199254740990];
const v7 = new WeakMap();
class C8 extends WeakMap {
    #f = v7;
    toString(a10, a11, a12) {
        a12[1065] = this;
        Object.defineProperty(v5, 65537, { writable: true, value: a12 });
        v7.f;
        return a12;
    }
    static [v3];
    [v3];
    [v2] = v4;
    static [v0] = v1;
}
new C8();
const v15 = new C8();
new C8();
let v17 = 0;
while (v17 < 2) {
    v15["has"](v7);
    v17++;
}
