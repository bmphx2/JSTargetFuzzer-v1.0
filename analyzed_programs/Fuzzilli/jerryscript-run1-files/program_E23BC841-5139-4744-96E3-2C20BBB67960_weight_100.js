new Uint8ClampedArray(1404);
const v8 = new BigInt64Array(512);
const v11 = new Int8Array(1024);
function f12(a13, a14) {
    const o19 = {
        __proto__: v8,
        ...v11,
        "a": Int8Array,
        "e": BigInt64Array,
        "d": BigInt64Array,
        "h": Uint8ClampedArray,
        "b": a14,
        2772: a13,
        4294967296: 1024,
        set f(a16) {
            a16 <= a14;
            this.length = 16;
        },
        [47109]: a14,
    };
    return o19;
}
f12(1972805714, 512);
f12(512, 1972805714);
f12(1024, 1972805714);
new BigUint64Array(10);
new Int32Array(3530);
const v37 = new Uint16Array(3);
new Array(2);
function F46() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = null;
    this.g;
    const t32 = F46 || this;
    t32[528] = F46;
    try { this["compile"](); } catch (e) {}
    this.h = null;
}
function F54(a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a56;
}
let v58 = new F54(2, 143375029);
const v59 = new F54(2147483649, 2147483649);
new F54(65535, -4294967295);
const v61 = [0.6692240164337011,419012.0246499621,5.0];
const v62 = [1.7976931348623157e+308,-0.0];
const v63 = [1000000.0,1000000000.0,4.0,289.3444488630878,1.7976931348623157e+308,8.027548255630752,1000000000.0];
function f64(a65, a66) {
    v62.length = 52824;
    v61[490] = 52824;
    const o92 = {
        3787: a66,
        o(a71, a72, a73) {
            [-2.0,0.7459882569980315,NaN,3.3359904113360415,-8.099642453889581];
            [1e-15,-1000000000000.0,1.7976931348623157e+308,1000000.0,2.220446049250313e-16,2.2250738585072014e-308,4.966478419124513,-1.6724656387142003e+308,-1000000.0,-1000000000.0];
            [908732.7996264326,1.7976931348623157e+308,1000000000000.0,NaN,2.2015143008017795,0.48179978532894996,-1000000.0];
            return 1073741824;
        },
        get a() {
            this.__proto__;
            return this;
        },
        set d(a80) {
            if (a66) {
                v58 ^= v59;
            } else {
                v37[249] = 1393538937;
            }
        },
        "c": a66,
        [v62](a85, a86, a87, a88) {
            return a66;
        },
        237: a66,
    };
    return o92;
}
const v93 = f64(v63, v61);
f64(v62, v62);
const v95 = f64(v62, v62);
class C96 extends f64 {
    set d(a98) {
        v95.length = 2;
        const t84 = 2;
        t84[2] = v62;
    }
    p(a101, a102) {
        v93[11] = a101;
        try { new a101(); } catch (e) {}
        return 1.7976931348623157e+308;
    }
}
new C96();
new C96();
new C96();
-Infinity;
const v113 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v115 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v117 = new Date();
class C118 {
    n(a120) {
        const v121 = `
            Date(v121);
        `;
        eval(v121);
        return v113;
    }
    static m(a126, a127) {
        delete Date[this];
        a127[v113] = v117;
        function f129() {
            return v117;
        }
        return this;
    }
}
const v130 = new C118();
const v131 = new C118();
const v132 = new C118();
function f133(a134, a135, a136, a137) {
    const o138 = {
        ...Date,
        "e": v115,
        __proto__: C118,
        "d": v131,
        "b": v115,
        "c": Date,
        "g": v113,
        "f": a135,
        [a137]: v131,
        "h": v113,
        "a": v130,
        45: v117,
        ...a137,
        [v132]: v130,
    };
    return o138;
}
const v139 = f133(v117, f133, v131, v113);
f133(C118, v117, f133(C118, v139, v131, v115), v115);
function f143(a144) {
    return v139;
}
class C145 extends f143 {
    static set d(a147) {
        const v148 = f133(v113, a147, v130, a147);
        try {
            super.delete(v132, this, v117, v113, v148);
        } catch(e150) {
        }
    }
}
