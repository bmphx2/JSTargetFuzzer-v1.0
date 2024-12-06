const v0 = [1.0];
let v1 = [-7.774665402257355,1.0,-4.8687204141573615,0.8324352334567106];
const v2 = [1.6814723276354285e+308,4.0,1.0,0.4040855274185621,-1.5560548738564548e+308,1000000000.0,-0.919219727209752,NaN,-2.220446049250313e-16];
function f6(a7, a8) {
    const o14 = {
        [-3.0]: a7,
        0: a8,
        [-86.59914243939284]: v0,
        ...a8,
        5: -3.0,
        "g": -86.59914243939284,
        "c": -86.59914243939284,
        valueOf(a10, a11) {
            a7 += -86.59914243939284;
            const v12 = a8 <= a11;
            ~a10;
            ({"g":v1,"length":a7,} = v0);
            return v12;
        },
        __proto__: a8,
    };
    return o14;
}
f6(2.0, v2);
const v16 = f6(2.0, v1);
const v17 = f6(-3.0, v0);
function f18(a19, a20, a21, a22) {
    const o35 = {
        "e": -86.59914243939284,
        [a21]: v17,
        3: a22,
        m(a24, a25, a26, a27) {
            const o30 = {
                "maxByteLength": 2427,
            };
            const v32 = new a22(7, o30);
            new Int8Array(v32);
            return v1;
        },
    };
    return o35;
}
f18(f6, -86.59914243939284, -3.0, v2);
f18(-3.0, -3.0, v1, v17);
f18(v16, 2.0, v1, v2);
new Float32Array(8);
new Int32Array(Int32Array);
const v47 = new Float64Array(106);
const o52 = {
    n(a49, a50) {
        for (const v51 of a49) {
        }
        return this;
    },
};
try { v47.n(o52, o52); } catch (e) {}
