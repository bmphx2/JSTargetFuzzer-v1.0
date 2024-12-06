function f0() {
    const o4 = {
        __proto__: "string",
        ..."string",
        512: -2.220446049250313e-16,
        "a": -2.220446049250313e-16,
        ..."string",
        "b": -2.220446049250313e-16,
        "c": -2.220446049250313e-16,
        14: -2.220446049250313e-16,
        ..."string",
        "f": -2.220446049250313e-16,
        "h": "string",
        ..."string",
        "e": 2147483647,
        1073741824: -2.220446049250313e-16,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
class C8 extends f0 {
    static #toString(a10) {
        const v11 = this - v5;
        v6[v6] += v11;
        v6[a10] = f0;
        super.a &= v11;
        return v11;
    }
    constructor(a13, a14) {
        super();
        function f15() {
            return f0;
        }
        v7.g = v7;
        try { a14.keys(a14, v7); } catch (e) {}
        this[Symbol.unscopables] = v5;
    }
}
const v19 = new C8(v6, C8);
const v20 = new C8(v19, v5);
new C8(v7, v20);
function f22(a23, a24) {
    const o39 = {
        "d": v19,
        set c(a26) {
        },
        "b": C8,
        "c": v19,
        __proto__: v19,
        set h(a31) {
            const o34 = {
                "maxByteLength": 512,
            };
            const v36 = new ArrayBuffer(10, o34);
            new Uint16Array(v36);
        },
    };
    return o39;
}
const v41 = f22(f22(f0, v5), C8);
f22(v6, v6);
const v43 = /V*/vyg;
/v\1(a)/vmsid;
const v45 = /(?:a?)*/vygsd;
Object.defineProperty(v45, "g", { writable: true, configurable: true, enumerable: true, get: f22 });
const v47 = Symbol.isConcatSpreadable;
v5[v47] = v47;
const v48 = v47;
new f22(v48, C8, v43, v45);
typeof v41 === "undefined";
f0();
