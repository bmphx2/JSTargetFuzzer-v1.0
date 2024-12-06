function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 11;
    this.c = 11;
    this.f = 11;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        ...v4,
        __proto__: v5,
        "h": v3,
        "d": a7,
        "g": a8,
        "e": a8,
        ...v3,
        "c": F0,
        [v5](a10, a11) {
            super.a = a10;
            return this;
        },
        "b": a8,
        ...v3,
        114: v4,
    };
    return o12;
}
const v13 = f6(v4, v5);
f6(v4, v3);
const v15 = f6(v4, v3);
class C22 {
    get c() {
        const t34 = "2147483648";
        t34.g = -624860.0956063346;
        class C24 {
            [this] = "2147483648";
            f = this;
        }
        new C24();
        new C24();
        new C24();
        let {"a":v29,"g":v30,} = this["2147483648"];
        return v30 = this;
    }
    e;
    static set h(a32) {
        this[this];
    }
    b = C22;
    [v13];
    static ["2147483648"];
    static 9;
}
const v34 = new C22();
new C22();
const v36 = new C22(v34);
const v37 = [-152.63656607287214,-0.0,886.4537260686914,-866019.2135467513,-1.244815512961017e+308,-1e-15,8.883546363345904];
[-1.0];
const v39 = [-7.446186175538654];
const v40 = v39[1024];
v15.c &= v40;
const v41 = ("p")[6];
v4 = v40;
for (let v42 = 0; v42 < 32; v42++) {
    v5["p" + v42] = v42;
}
const v52 = [-16,4];
const v53 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
const v55 = Symbol.iterator;
const o64 = {
    [v55]() {
        let v57 = 10;
        const o63 = {
            next() {
                v57--;
                const v61 = v57 == 0;
                const o62 = {
                    "done": v61,
                    "value": v57,
                };
                return o62;
            },
        };
        return o63;
    },
};
[-4294967295,14,219268071,1317141055,2];
C22[1073741823] = v39;
v39[C22] = v34;
delete v53[-9];
try { v39.pop(45103); } catch (e) {}
const o77 = {
    __proto__: v52,
    "d": 1073741825,
    3943951267: 536870889,
    "c": -949,
    8: C22,
    [-9]: v40,
    get b() {
        let [v75,...v76] = v40;
        return v75;
    },
    [F0]: v41,
    "b": f6,
    ...v37,
    "a": false,
    "h": v41,
    "f": 2147483647,
    "g": -624860.0956063346,
    "e": v15,
    6: v41,
    "caller": 45103,
};
const o81 = {
    "apply": f6,
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getPrototypeOf": f6,
    __proto__: v13,
    [-9007199254740991]: v37,
    "h": "2147483648",
    "f": v36,
    ...v53,
    "g": 45103,
    "e": -46438,
    [1073741824]: f6,
    "d": v52,
    0: F0,
    "has": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
    "set": f6,
    "setPrototypeOf": f6,
};
new Proxy(v53, o81);
