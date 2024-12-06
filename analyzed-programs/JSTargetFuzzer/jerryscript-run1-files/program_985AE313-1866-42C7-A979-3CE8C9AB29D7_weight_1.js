const v1 = new WeakMap();
function f2(a3, a4) {
    const o10 = {
        get b() {
            a3.c /= a4;
            try { v1.has(a3); } catch (e) {}
            typeof a4 === "function";
            return "function";
        },
        ...a3,
        [a4]: a3,
        "c": v1,
        "e": a3,
        __proto__: a3,
    };
    return o10;
}
const v11 = f2(v1, WeakMap);
f2(v11, f2);
const v13 = f2(WeakMap, f2);
function f14(a15, a16) {
    const o33 = {
        "f": f2,
        get a() {
            function f18() {
                return f2;
            }
            const v22 = new Number(Reflect);
            Reflect.ownKeys(v22);
            Math.acosh(-128);
            let v28 = 1.7976931348623157e+308 * this;
            Math.acos(9223372036854775807);
            !1.7976931348623157e+308;
            1.7976931348623157e+308 >>> -128;
            v28--;
            return a16;
        },
    };
    return o33;
}
f14(v13, v11);
f14(v11, v13);
f14(v13, v13);
const v42 = new Uint32Array(181);
let v44 = BigUint64Array;
let v45 = new v44(1);
let v46 = 253;
[v46,,v44,v45] = v42;
try { v44["abs"](181, v46, v44); } catch (e) {}
new Uint16Array(v46);
for (let i59 = 0; i59 < 2; i59++) {
    const v65 = new Function("x");
    v65.name;
}
Function();
