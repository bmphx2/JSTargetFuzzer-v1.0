function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.d = -9007199254740992;
    this.f = -9007199254740992;
}
new F3(-9007199254740992, 413698497);
new F3(-26010, 413698497);
new F3(-9007199254740992, -26010);
[45667,-536870912];
const v11 = [-1024,65535,-4294967297,-256,268435456,-200295816,1073741823];
const v12 = [-1188955490,-29492,512,-2147483647];
const v19 = [0.6692240164337011,419012.0246499621,5.0];
const v20 = [1.7976931348623157e+308,-0.0];
const v21 = [1000000.0,1000000000.0,4.0,289.3444488630878,1.7976931348623157e+308,8.027548255630752,1000000000.0];
function f22(a23, a24) {
    v20.length = 52824;
    v19[490] = 52824;
    const o43 = {
        3787: a24,
        get a() {
            this.__proto__;
            return this;
        },
        [v12]: -2147483648,
        "g": v11,
        [1073741824]: a24,
        "deleteProperty": F3,
        ...a24,
        set d(a31) {
        },
        "c": a24,
        [v20](a36, a37, a38, a39) {
            return a24;
        },
        237: a24,
    };
    return o43;
}
const v44 = f22(v21, v19);
f22(v20, v20);
const v46 = f22(v20, v20);
class C47 extends f22 {
    set d(a49) {
        v46.length = 2;
        const t45 = 2;
        t45[2] = v20;
    }
    p(a52, a53) {
        v44[11] = a52;
        try { new a52(); } catch (e) {}
        return 1.7976931348623157e+308;
    }
}
new C47();
new C47();
new C47();
-Infinity;
const v64 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v66 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v68 = new Date();
class C69 {
    n(a71) {
        const v72 = `
            Date(v72);
        `;
        eval(v72);
        return v64;
    }
    static m(a77, a78) {
        delete Date[this];
        a78[v64] = v68;
        function f80() {
            return v68;
        }
        return this;
    }
}
const v81 = new C69();
const v82 = new C69();
const v83 = new C69();
function f84(a85, a86, a87, a88) {
    const o104 = {
        ...Date,
        "e": v66,
        "d": a88,
        "g": v11,
        set e(a90) {
            const v91 = (a92) => {
                [-9223372036854775808,4294967296,2147483647,-2,9007199254740991];
                const v94 = [-15382,536870887,26849,256,-1361821508,-2147483647,7,4294967297,-210197879,-4096];
                class C95 {
                    constructor(a97, a98, a99) {
                        new BigInt64Array(1387);
                    }
                }
                [-4294967297,2147483647,8,-531716003,-593309288,16];
                return v94;
            };
        },
        __proto__: C69,
        "d": v82,
        "b": v66,
        "c": Date,
        "g": v64,
        "f": a86,
        [a88]: v82,
        "h": v64,
        "a": v81,
        45: v68,
        ...a88,
        [v83]: v81,
    };
    return o104;
}
const v105 = f84(v68, f84, v82, v64);
f84(C69, v68, f84(C69, v105, v82, v66), v66);
function f109(a110) {
    return v105;
}
class C111 extends f109 {
    static set d(a113) {
        const v114 = f84(v64, a113, v81, a113);
        try {
            super.delete(v83, this, v68, v64, v114);
        } catch(e116) {
        }
    }
}
