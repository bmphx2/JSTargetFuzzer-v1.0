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
    const o9 = {
        ...v4,
        __proto__: v5,
        "h": v3,
        "d": a7,
        "g": a8,
        "e": a8,
        ...v3,
        "c": F0,
        ...v3,
        114: v4,
    };
    return o9;
}
const v10 = f6(v4, v5);
f6(v4, v3);
const v12 = f6(v4, v3);
class C19 {
    get c() {
        const t29 = "2147483648";
        t29.g = -624860.0956063346;
        class C21 {
            [this] = "2147483648";
            f = this;
        }
        new C21();
        new C21();
        new C21();
        let {"a":v26,"g":v27,} = this["2147483648"];
        return v27 = this;
    }
    e;
    static set h(a29) {
        this[this];
    }
    b = C19;
    [v10];
    static ["2147483648"];
    static 9;
}
const v31 = new C19();
new C19();
new C19(v31);
const v34 = [-152.63656607287214,-0.0,886.4537260686914,-866019.2135467513,-1.244815512961017e+308,-1e-15,8.883546363345904];
[-1.0];
const v36 = [-7.446186175538654];
const v37 = v36[1024];
v12.c &= v37;
("p")[6];
v4 = v37;
for (let v39 = 0; v39 < 32; v39++) {
    v5["p" + v39] = v39;
}
const v49 = [-16,4];
const v50 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
C19[1073741823] = v36;
v36[C19] = v31;
delete v50[-9];
try { v36.pop(45103); } catch (e) {}
const o60 = {
    __proto__: v49,
    "d": 1073741825,
    3943951267: 536870889,
    "c": -949,
    8: C19,
    [-9]: v37,
    "b": f6,
    ...v34,
    "a": false,
    "caller": 45103,
};
const o64 = {
    "apply": f6,
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getPrototypeOf": f6,
    "has": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
    "set": f6,
    "setPrototypeOf": f6,
};
new Proxy(v50, o64);
