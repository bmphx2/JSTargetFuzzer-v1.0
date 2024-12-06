function f0() {
    const o30 = {
        ..."Oh",
        ..."Oh",
        p() {
            this[f0] = this;
            return f0;
        },
        "f": -2147483649,
        __proto__: "Oh",
        m(a6) {
            "Oh" instanceof a6;
            function f8(a9, a10, a11, a12) {
                const o14 = {
                    "apply": f0,
                    "call": f0,
                    "construct": f0,
                    "deleteProperty": f0,
                    "get": f0,
                    ...a6,
                    [a12]: -2147483649,
                    "getOwnPropertyDescriptor": f0,
                    "getPrototypeOf": f0,
                    "ownKeys": f0,
                    "preventExtensions": f0,
                    "set": f0,
                };
                new Proxy(a6, o14);
                return arguments;
            }
            f8();
            try {
                const v18 = super.toString();
                try { v18.cosh(v18, v18, f8); } catch (e) {}
                new Uint8Array(1000);
                new BigInt64Array(3835);
                new Uint8ClampedArray(14);
            } catch(e29) {
            }
            return "f";
        },
        "d": -2147483649,
    };
    return o30;
}
f0();
f0();
f0();
class C43 {
}
new Object(3);
const v55 = new Int8Array(129);
try { v55.findIndex(Uint32Array); } catch (e) {}
("multiline")["x"];
const v70 = Symbol.species;
function F71(a73, a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
}
const v76 = new F71();
let v77;
try { v77 = v76.seal(); } catch (e) {}
try { v77["507776846"](); } catch (e) {}
const t62 = "x";
t62[v70] = 536870887n;
const t64 = 1000n;
t64[9] = 255;
let v79;
try { v79 = v70.toString(255, "x", 1073741824n); } catch (e) {}
v79 = v70;
