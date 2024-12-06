function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.g = f0;
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 extends F1 {
    constructor(a8) {
        super();
        f0();
        const v11 = Symbol.replace;
        v4[v11] = v11;
    }
    d;
    toString(a13) {
        const o15 = {
            "call": C6,
            "construct": isNaN,
            "defineProperty": isNaN,
            "get": isNaN,
            "has": isNaN,
            "isExtensible": isNaN,
            "ownKeys": a13,
            "preventExtensions": f0,
            "setPrototypeOf": f0,
        };
        new F1(this, o15);
        return o15;
    }
}
const v18 = new C6(v4);
const v19 = new C6(v5);
const v20 = new C6(v3);
function f21(a22, a23, a24) {
    const o32 = {
        get c() {
            const v26 = [a23,this,a23,a23,v19];
            const v27 = [v3,v3,a22];
            [v27,this,v20,a23];
            const v29 = this < this;
            v26[Symbol.species] = v29;
            return v27;
        },
        "a": a22,
        "g": v3,
        "f": C6,
        ...v19,
    };
    return o32;
}
const v33 = f21(v20, v4, v18);
const v34 = f21(v19, v18, v18);
f21(v20, v20, v5);
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a40;
    this.c = v18;
    this.a = v34;
}
const v42 = new F36(v20, F1, v33, v19);
new F36(v20, v33, v34, v42);
new F36(v20, v33, v33, v34);
function F45() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
new F45();
const v49 = new F45();
const v50 = new F45();
function f51() {
    return v49;
}
function f52(a53) {
    const o72 = {
        [F45]: v49,
        m(a55, a56, a57, a58) {
            if (this) {
                const v62 = -a56;
                v62 & 4001;
                4001 ^ v62;
                for (const v67 of [-9.978835596066949,0.8505756132149569,684.253217079754,-Infinity,2.2250738585072014e-308]) {
                    -0.355714392071409 % v67;
                }
            } else {
                for (let v69 = 0; v69 < 32; v69++) {
                    a57["p" + v69] = v69;
                }
            }
            return a57;
        },
    };
    return o72;
}
const v73 = f52(v50);
let v74 = f52(v50);
f52(v73);
const v76 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v79 = new Uint8Array();
v20.c = v79;
let v80 = -1073741824;
class C81 {
}
new C81();
const v84 = new Uint8Array(C81, v80, v80);
[v80,,v74] = v84;
const v85 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v89 = 0; v89 < 32; v89++) {
    v76["p" + v89] = v89;
}
v76[9223372036854775807];
let {"a":v94,"length":v95,} = v85;
[f51,v50,v95,v94];
[v76,[v76]];
