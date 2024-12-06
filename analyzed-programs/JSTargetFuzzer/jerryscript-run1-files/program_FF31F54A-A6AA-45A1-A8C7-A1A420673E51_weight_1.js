const v0 = [536870889,10,9007199254740992,-9007199254740991,536870888,1391256840,268435439,-2369,-9007199254740991];
const v1 = [-7,8,128,1,-9007199254740992,-2147483648,9223372036854775807];
const v2 = [-9223372036854775808,-27322];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.f = a5;
}
const v6 = new F3(v1);
const v7 = new F3(v2);
const v8 = new F3(v0);
function f9(a10, a11, a12, a13) {
    const o23 = {
        "h": F3,
        __proto__: a12,
        "d": a11,
        [F3](a15, a16, a17, a18) {
            v7 ^ a15;
            for (let v20 = 0; v20 < 32; v20++) {
                v6["p" + v20] = v20;
            }
            return a15;
        },
        "g": a10,
    };
    return o23;
}
const v24 = f9(v1, v6, v7, v6);
f9(F3, v7, v6, v8);
f9(v24, v7, v7, v6);
new Uint8Array(256);
new Uint8ClampedArray(0);
const v35 = [];
(0.7127021906311133 instanceof Uint8ClampedArray) != v35;
const v44 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
try { v44("string"); } catch (e) {}
new BigUint64Array(7);
("replaceAll")["startsWith"]();
