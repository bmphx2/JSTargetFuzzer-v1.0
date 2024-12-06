function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9;
    this.g = 9;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    [F0] = v3;
    static [v4] = F0;
    constructor(a8, a9) {
        for (let v10 = 0; v10 < 32; v10++) {
            a9["p" + v10] = v10;
        }
    }
    #b;
    c;
    static #c = v3;
}
const v13 = new C6(C6, v5);
const v14 = new C6(v13, v5);
new C6(v14, v4);
let v19 = [1.7976931348623157e+308,-2.0,1.0516984320283103e+308,-1000.0,271396.57650050195,5.0,1.1360443520702752e+308];
const v20 = [1.7976931348623157e+308,-879.7202033702349,-2.2250738585072014e-308,9.0501127543697,-1000000000.0,1000000000000.0,2.2250738585072014e-308];
for (const v22 of [-884.8749512980272,-194.60706639192017,-0.914013199416841,-2.2250738585072014e-308,-1.1200944864170936e+308,-3.0986995249538517e+307,-1e-15,1000000000.0]) {
    let v23 = v20 * v3;
    [v23,,v3,v19] = v22;
    throw v23;
}
const o29 = {
    "maxByteLength": 4096,
};
const v31 = new SharedArrayBuffer(4096, o29);
new BigInt64Array(v31);
