function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 15;
    this.h = 15;
}
const v3 = new F0();
const v4 = new F0();
for (let v5 = 0; v5 < 32; v5++) {
    v3["p" + v5] = v5;
}
const v8 = new F0();
function f9(a10) {
    const o15 = {
        "b": a10,
        [v3]: v3,
        [v4]: a10,
        "c": F0,
        536870889: a10,
        [a10](a12) {
            a10.h >>>= a12;
            const v13 = a10[v8];
            let v14;
            try { v14 = v13(this, a12); } catch (e) {}
            return v14;
        },
        "e": a10,
        "g": v4,
        1073741824: v3,
    };
    return o15;
}
f9(v3);
f9(v8);
const v18 = f9(v4);
[-2,11,14793,2147483648,4294967297,-11,1836444738,-48945,1471882527,-2097147790];
[1848479972,-9007199254740990,-4294967295,0];
[-4294967297,15,10000,127,-387122309,11,17031,1,-4294967296];
[-3.0359344436352487,6.578252039792691,5.0];
[2.220446049250313e-16,-1e-15,-9.68379391696796e+307,-204.00292477973346,-2.2889124463315557e+307,-782885.0340911626,-1.7976931348623157e+308];
const v24 = [NaN,1000.0,-1.2287944858813202e+308,0.9968997485867592,0.33672884095194766,-0.0,562731.1294245429,-0.0,-538686.3560577506,8.514351632151865];
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
class C38 extends v27.constructor {
    f;
}
new C38();
let v41 = new Uint16Array(v31);
for (let i47 = 0; i47 < 2; i47++) {
    const v53 = new Function("x");
    v53.name;
}
Function();
v41 %= v31;
Object.defineProperty(v18, "e", { writable: true, configurable: true, value: Function });
[C38,v24,-128,-4294967295,1];
[v18];
[638046528];
