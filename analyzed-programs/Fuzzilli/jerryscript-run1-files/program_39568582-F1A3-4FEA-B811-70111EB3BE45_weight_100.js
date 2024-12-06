new BigUint64Array(10);
new Int32Array(3530);
new Uint16Array(3);
new Array(2, Int32Array);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = null;
    this.g;
    const t7 = F23 - this;
    t7[528] = F23;
    try { this["compile"](); } catch (e) {}
    this.h = null;
}
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a33;
}
new F31(2, 143375029);
new F31(2147483649, 2147483649);
new F31(-54093, -4294967295);
const v38 = [0.6692240164337011,419012.0246499621,5.0];
const v39 = [1.7976931348623157e+308,-0.0];
const v40 = [1000000.0,1000000000.0,4.0,289.3444488630878,1.7976931348623157e+308,8.027548255630752,1000000000.0];
function f41(a42, a43) {
    v39.length = 52824;
    v38[490] = 52824;
    const o69 = {
        3787: a43,
        o(a48, a49, a50) {
            [-2.0,0.7459882569980315,NaN,3.3359904113360415,-8.099642453889581];
            [1e-15,-1000000000000.0,1.7976931348623157e+308,1000000.0,2.220446049250313e-16,2.2250738585072014e-308,4.966478419124513,-1.6724656387142003e+308,-1000000.0,-1000000000.0];
            [908732.7996264326,1.7976931348623157e+308,1000000000000.0,NaN,2.2015143008017795,0.48179978532894996,-1000000.0];
            return 1073741824;
        },
        get a() {
            this.__proto__;
            return this;
        },
        set d(a57) {
        },
        "e": a43,
        [v39](a62, a63, a64, a65) {
            return a43;
        },
        237: a43,
    };
    return o69;
}
const v70 = f41(v40, v38);
f41(v39, v39);
const v72 = f41(v39, v39);
class C73 extends f41 {
    set d(a75) {
        v72.length = 2;
        const t54 = 2;
        t54[2] = v39;
    }
    p(a78, a79) {
        v70[11] = a78;
        try { new a78(); } catch (e) {}
        return 1.7976931348623157e+308;
    }
}
new C73();
new C73();
const v86 = new C73();
-Infinity;
const v90 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v92 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v94 = new Date();
class C95 {
    n(a97) {
        const v98 = `
            Date(v98);
        `;
        eval(v98);
        return v90;
    }
    static m(a103, a104) {
        delete Date[this];
        a104[v90] = v94;
        function f106() {
            return v94;
        }
        return this;
    }
}
const v107 = new C95(v86);
const v108 = new C95();
const v109 = new C95();
function f110(a111, a112, a113, a114) {
    const o115 = {
        ...Date,
        "e": v92,
        __proto__: C95,
        "d": v108,
        "b": v92,
        "c": Date,
        "g": v90,
        "f": a112,
        [a114]: v108,
        "h": v90,
        "a": v107,
        45: v94,
        ...a114,
        [v109]: v107,
    };
    return o115;
}
const v116 = f110(v94, f110, v108, v90);
f110(C95, v94, f110(C95, v116, v108, v92), v92);
function f120(a121) {
    return v116;
}
class C122 extends f120 {
    static set d(a124) {
        const v125 = f110(v90, a124, v107, a124, v72, v86);
        try {
            super.delete(v109, this, v94, v90, v125);
        } catch(e127) {
        }
    }
}
