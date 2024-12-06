function f3() {
    return -1n;
}
const v4 = [256,268435456,9223372036854775807,-1028456931,-9223372036854775808,-34146,26969];
const v5 = [-4294967295,65537,8388,536870888];
const v6 = [39803,-26133,1648683172,9,-5,536870887,-14,-45310];
const v7 = [661.3464020031138,-1.1234522351025618,-938.0848114328564,-79539.10194219823,-838719.1333255328,-0.0,-444052.46074457176,379354.0300873311,-718.3131421722675,-4.378702060827029];
const v8 = [4.0,1000000.0,-9.90105096737793e+307,-409.61692000267044,0.3992113108086649,-3.102663001001491,-840.6696662922992,3.9890587097934826,-0.0];
const v9 = [4.319402378455479,0.7877705727943554,Infinity,8.29859824423281,-2.220446049250313e-16];
function f10(a11, a12, a13, a14) {
    const o21 = {
        [a11](a16, a17, a18, a19) {
            let v15 = this;
            if (a19 < v7) {
                ({"b":v15,"length":a18,...a12} = v8);
            } else {
                v7.toString = f3;
            }
            return a11;
        },
        "b": -1n,
        [48374n]: a14,
    };
    return o21;
}
f10(1702404095n, v8, v7, v4);
f10(1702404095n, v9, v5, v6);
f10(48374n, v6, v6, v7);
function f25() {
    const o42 = {
        __proto__: "f",
        "d": "f",
        "g": "f",
        ..."f",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get g() {
            this[7] = -24152;
            let v30;
            try { v30 = this.n(this); } catch (e) {}
            let [v31,v32] = v30;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "f";
        },
    };
    return o42;
}
const v43 = f25();
const v44 = f25();
const v45 = f25();
class C52 extends f25 {
    constructor(a54, a55, a56, a57) {
        super();
        const o62 = {
            "e": f25,
            [v43](a59, a60) {
                super.c;
                return -1957950668;
            },
            "g": f3,
            "construct": f25,
            "defineProperty": f25,
            "get": f25,
            "getOwnPropertyDescriptor": f25,
            "has": f25,
            "isExtensible": a54,
            "set": f25,
            "setPrototypeOf": f25,
        };
        let v63 = 0;
        while (v63 < 5) {
            new f10(48374n, f25, a57, 1702404095n);
            f25();
            v63++;
        }
        new Proxy(this, o62);
    }
}
const v71 = new C52(-19870386, -341266709, v44, 9007199254740990);
let v72 = new C52(v71, -1957950668, v71, 9007199254740990);
let v73 = new C52(v45, 9007199254740990, v43, -341266709);
const v74 = v44 <= v73;
if (v74) {
    v73 = C52;
} else {
    let {"b":v76,"d":v77,} = C52;
    C52[-4096] += -4096;
}
v72 <<= v71;
const v79 = 9007199254740990 <= v43 ? 9007199254740990 : v43;
const v83 = f3 instanceof C52;
function F84(a86, a87, a88, a89) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a88;
}
new F84(v45, 1702404095n, v83, v79);
const v91 = new F84(v43, 48374n, v83, -7);
new F84(v91, v74, v83, -19870386);
