function f6() {
    let v7 = 0.23316334252999338;
    const o10 = {
        get h() {
            v7 = -1.7976931348623157e+308;
            return f6;
        },
    };
    return f6;
}
new WeakSet();
[-5.0,-1.7976931348623157e+308,1000000000000.0,1e-15,0.30748133221424856,-292745.71101489104];
const v14 = [0.10373681144157598,-1000000.0,0.6149183402293428,3.0,-2.0,0.0,-1.0];
[-0.0,0.7069609419698857,-2.220446049250313e-16,-1000000000000.0,-700.174736052448,895841.9002328094,1000.0,2.0];
const v16 = [-22199,4,4];
[65535,268435440,-755656218,2,53228,92503475,2055168845,-2,12,-10];
const v18 = [1024,52179,536870889,-32208,65536,-1999666121,-2147483649,-9007199254740992];
const v20 = new Date();
class C21 {
    n(a23) {
        const v24 = `
            Date(v24);
        `;
        eval(v24);
        return v16;
    }
    static m(a29, a30) {
        delete Date[this];
        a30[v16] = v20;
        Symbol.toPrimitive;
        new Int16Array(4096);
        function f37() {
            return v20;
        }
        return this;
    }
}
const v38 = new C21();
const v39 = new C21();
const v40 = new C21();
function f41(a42, a43, a44, a45) {
    const o54 = {
        ...Date,
        "e": v18,
        __proto__: C21,
        "d": v39,
        "a": v39,
        /*
        __proto__: v18,
        */
        "e": a45,
        /*
        __proto__: a42,
        */
        [a42](a47, a48) {
            a48.__proto__;
            a48 % v14;
            a42.length = a47;
            return a43;
        },
        "b": v18,
        "c": Date,
        "g": v16,
        "f": a43,
        [a45]: v39,
        "h": v16,
        "a": v38,
        45: v20,
        ...a45,
        [v40]: v38,
    };
    return o54;
}
const v55 = f41(v20, f41, v39, v16);
f41(C21, v20, f41(C21, v55, v39, v18), v18);
function f59(a60) {
    return v55;
}
class C61 extends f59 {
    static set d(a63) {
        const v64 = f41(v16, a63, v38, a63);
        try {
            super.delete(v40, this, v20, v16, v64);
        } catch(e66) {
        }
    }
}
