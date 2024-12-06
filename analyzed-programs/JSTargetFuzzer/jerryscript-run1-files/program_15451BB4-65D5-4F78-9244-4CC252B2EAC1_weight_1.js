function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740991;
    this.h = -9007199254740991;
    this.d = -9007199254740991;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 {
    constructor(a11, a12, a13) {
        typeof a11 === "bigint";
    }
    get a() {
        v3 += v5;
        const t14 = 1000;
        t14[0] = this;
        let v19;
        try { v19 = v5["isSealed"](); } catch (e) {}
        v19 = this;
        try {
            super.catch(this);
        } catch(e22) {
        }
        return v5;
    }
    static 512 = 10000;
    [1000] = v3;
}
let v23 = new C9(v4, v3, 3);
typeof (F0 % 3) === "symbol";
--v23;
new C9(C9, 10000, 1000);
const v30 = new C9(v5, 10000, 10000);
[0.0,-2.2250738585072014e-308,0.19437659849094946,-1e-15,797.898262197572,5.0,1.7976931348623157e+308,-999.2742008404272,-56.79635042010341];
const v32 = [2.2250738585072014e-308,0.4893212283060393,-2.1106128968624562e+307,-8.850689906280557e+307,-1.4731059336964243e+308,2.2250738585072014e-308,146.72348896073186,650.5772681623189,1000.0];
const v33 = [0.8911112547753278,-116.99021378377995,-3.813206931144801e+307,1.5808502199407296e+308,-1.195039725006417,-1.0,-1000000000.0,Infinity,2.0];
function f34(a35, a36) {
    const o48 = {
        p(a38, a39, a40) {
            a35++;
            a36++;
            285856964 % v30;
            a35 + a36;
            return v30;
        },
        3405471580: v3,
        "c": v3,
        6: v30,
        __proto__: v30,
        "g": v32,
        658148287: a35,
        "d": a35,
        "b": a36,
        "a": v33,
        ...a35,
    };
    return o48;
}
f34(v23, 1000);
f34(v23, 1000);
f34(v23, 3);
function f52(a53, a54, a55) {
    arguments.callee;
    return f52;
}
const v58 = f52(f52, f52, f52);
let v59 = [v58,v58,v58];
class C60 {
    valueOf(a62, a63) {
        let v64;
        try { v64 = a63(); } catch (e) {}
        ({"b":v59,"e":a62,} = v64);
    }
}
const v65 = new C60();
async function f66(a67, a68) {
    return a67 /= C60;
}
f66(v65);
