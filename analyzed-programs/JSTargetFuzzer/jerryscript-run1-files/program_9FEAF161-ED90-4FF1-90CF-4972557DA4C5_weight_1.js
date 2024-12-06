const v0 = [1.0];
let v1 = [-7.774665402257355,1.0,-4.8687204141573615,0.8324352334567106];
const v2 = [1.6814723276354285e+308,4.0,1.0,0.4040855274185621,-1.5560548738564548e+308,1000000000.0,-0.919219727209752,NaN,-2.220446049250313e-16];
function f6(a7, a8) {
    const o36 = {
        [-3.0]: a7,
        0: a8,
        [-86.59914243939284]: v0,
        ...a8,
        5: -3.0,
        "c": 2.0,
        "e": -86.59914243939284,
        __proto__: v0,
        "f": v2,
        "g": v1,
        "g": -86.59914243939284,
        "c": -86.59914243939284,
        valueOf(a10, a11) {
            a7 += -86.59914243939284;
            const v12 = this[14];
            v1.__proto__;
            const v14 = v0[-1];
            const v16 = Symbol.iterator;
            const o25 = {
                [v16]() {
                    let v18 = 10;
                    const o24 = {
                        next() {
                            v18--;
                            const v22 = v18 == 0;
                            const o23 = {
                                "done": v22,
                                "value": v18,
                            };
                            return o23;
                        },
                    };
                    return o24;
                },
            };
            const v26 = a8 <= a11;
            function f27(a28, a29, a30) {
                const o31 = {
                    __proto__: v2,
                };
                return o31;
            }
            f27(-3.0, v0, -3.0);
            f27(v14, v14, o25);
            f27(v12, a8, v26);
            ~a10;
            ({"g":v1,"length":a7,} = v0);
            return v26;
        },
        /*
        __proto__: a8,
        */
    };
    return o36;
}
f6(2.0, v2);
const v38 = f6(2.0, v1);
const v39 = f6(-3.0, v0);
function f40(a41, a42, a43, a44) {
    const o57 = {
        "e": -86.59914243939284,
        [a43]: v39,
        3: a44,
        m(a46, a47, a48, a49) {
            const o52 = {
                "maxByteLength": 2427,
            };
            const v54 = new a44(7, o52);
            new Int8Array(v54);
            return v1;
        },
    };
    return o57;
}
const v58 = f40(f6, -86.59914243939284, -3.0, v2);
f40(-3.0, -3.0, v1, v39);
f40(v38, 2.0, v1, v2);
new Float32Array(8);
class C64 extends f40 {
    static [v58];
}
new C64();
new C64();
new C64();
new Int32Array(Int32Array);
const v73 = new Float64Array(106);
const v74 = [-4294967295,288477491,127,-9,852620098,-5,-12,-2147483648];
[v74,v74,v74,v74,v74];
function f76(a77, a78, a79, a80) {
    return a79;
}
const o85 = {
    n(a82, a83) {
        for (const v84 of a82) {
        }
        return this;
    },
};
try { v73.n(o85, o85); } catch (e) {}
const o87 = {
    "defineProperty": f6,
    "deleteProperty": f6,
};
new Proxy(C64, o87);
