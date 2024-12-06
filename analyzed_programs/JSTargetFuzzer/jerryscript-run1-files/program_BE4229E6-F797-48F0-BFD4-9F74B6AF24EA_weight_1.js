function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -29412;
    const v3 = `
        delete this[4];
    `;
    eval(v3);
}
const v7 = new F0();
const v8 = new F0();
const v9 = new F0();
function f10() {
    return F0;
}
class C11 extends F0 {
    constructor(a13, a14) {
        super();
        const v15 = v7.c;
        try { new v15(v15, v15, f10); } catch (e) {}
    }
    static c = v7;
    static get d() {
        let v18 = 0;
        while ((() => {
                const v20 = v18 < 2;
                v9.__proto__ = v8;
                super.c = 2;
                return v20;
            })()) {
            try { this["exp"](this, "exp"); } catch (e) {}
            v18++;
        }
        return v18;
    }
}
const v27 = new C11(v7, v9);
new C11(v9, v9);
const v29 = new C11(v27, v9);
const v34 = f10();
try { new f10(-1e-15, v9, v27, ...v34, v9, v29); } catch (e) {}
[-1.2414777627566748e+308,1.0,0.4563773361725827,-909.5381332101407,1.7976931348623157e+308,-8.84366421597855,2.0];
[-1000000000000.0,-1.7131618850663206e+308,-1.1747478672638708e+308,-7.742599935372986,0.651457833541554];
[-118.55242080556457,-1000000000000.0];
function f44() {
    return 65535;
}
let v51 = "10000";
[311682.4955808916,-449403.94915179955,1.6829783686982452e+308,2.802700865104102,-39708.431398532586,1000000000.0,8.587665291319934e+307];
const v56 = [NaN,-1.2270460429789084e+308,0.19422729730905763,-4.0,1.7976931348623157e+308,-442773.22472999385,2.2250738585072014e-308,-1.0];
[1000000000000.0,-1000000000000.0,0.14296984568977222];
const v59 = Symbol.match;
const t51 = "4a";
t51[v59] = v56;
const v60 = new f44();
const t54 = "4a";
t54[v60] = v60;
v59[65535] >>= 41447;
v51 = "4a";
