const v1 = new Set();
function f2() {
    v1.__proto__ = v1;
    v1[f2] = f2;
    Object.defineProperty(v1, "__proto__", { writable: true, configurable: true, enumerable: true, set: f2 });
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = Set;
        this.d = Set;
        this.a = a5;
    }
    new F3(v1);
    const v7 = new F3(F3);
    new F3(v7);
    return v1;
}
const v12 = [644147.590099239,-3.0,-1000.0,7.641564536278512];
[-1000000.0,3.6669411622514367,0.9128706926955306,-0.11304162647423865,1e-15,-240300.59692452173,-3.0,-4.0,1.7920450545263379e+308,-1.0];
const v14 = [2.2250738585072014e-308,-1.7976931348623157e+308,3.0,1000000000000.0,-318.3816443546805];
let v15 = [-57095,1834842251,-337870430,-1896430292,-2147483648,-2147483649];
const v16 = [52181,15,5,2,-39251,65537,-1024,536870887,9223372036854775807,129];
const v17 = [-2,42584];
function f18(a19, a20, a21) {
    const o32 = {
        "h": a19,
        [a20](a23, a24) {
            const v26 = Symbol.iterator;
            v17[v26] = v26;
            v16[Symbol.iterator];
            return v14 > f2 ? v14 : f2;
        },
        ...a19,
        "e": a21,
    };
    return o32;
}
const v33 = f18(v14, 2147483649, v15);
f18(v17, -536870912, v14);
f18(v14, 2147483649, v12);
const v38 = new Uint16Array(9);
const v41 = new Float64Array(256);
const v44 = new Int8Array(4096);
[9,v41,Uint16Array,Uint16Array,[256,9,4096,[v44,Float64Array,256]]];
new Array(127);
const v53 = new Uint32Array(181);
let v55 = BigUint64Array;
let v56 = new v55(1);
let v57 = 253;
[v57,,v55,v56] = v53;
try { v55["abs"](181, v57, v55); } catch (e) {}
v33[8] = -128;
v38[v57] = -4294967295;
new Uint32Array(v33, v56, -536870912);
Math.min(65537);
--v15;
const v67 = v15 & 65537;
Math.sinh(v67);
65537 << v67;
!v15;
new Uint16Array(v57);
for (let i79 = 0; i79 < 2; i79++) {
    const v85 = new Function("x");
    v85.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
