function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -65537;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
const v6 = [F0,v5];
[F0,F0,v5];
const v8 = [v3,v5];
v4 **= v3;
const o11 = {
    "g": v6,
    "e": v6,
    "a": v8,
    ...v5,
    [-2]: v5,
    "maxByteLength": 2923,
};
const v13 = new ArrayBuffer(10, o11);
new DataView(v13);
([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin();
