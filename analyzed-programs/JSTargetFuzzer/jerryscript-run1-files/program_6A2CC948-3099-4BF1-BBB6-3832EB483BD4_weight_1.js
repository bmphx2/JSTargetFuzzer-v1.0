const v3 = [-50422,4,268435441];
const v4 = [268435441,-50422,4,-50422];
const v5 = [v3,v4,-50422];
const v9 = [-1000.0];
const v10 = [-397693.67132398044,2.2250738585072014e-308,-3.0];
const v11 = [-Infinity,2.220446049250313e-16,0.10195010531416004,4.65803932239009e+307,4.689338059092751e+307,-2.0,4.0,-Infinity,NaN,-1000000000.0];
function f12() {
    return v4;
}
function f13(a14, a15, a16, a17) {
    const o31 = {
        get c() {
            let v18 = this;
            const v19 = --v18;
            function f20(a21, a22) {
                a21();
                return a22;
            }
            const v26 = new Uint8Array(8);
            try { v26.reduce(f20); } catch (e) {}
            let v28;
            try { v28 = v5.map(f12, v10); } catch (e) {}
            try { new v28(v28, v19, a17); } catch (e) {}
            a16[a15[-2]] |= 512;
            return v11;
        },
        "h": a15,
        "d": a17,
        "a": v10,
        __proto__: v9,
        "c": 4,
        5: v10,
        "g": v5,
    };
    return o31;
}
f13(v3, v3, v5, v5, -9007199254740991, v9);
f13(v4, v10, v3, v9);
f13(v4, v3, v10, v11);
function f35() {
}
new Uint8Array(0);
let v49 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v51 = new Int32Array(127);
v49 /= v51;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
