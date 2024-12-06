const v0 = [-16];
const v1 = [65536,-19754,268435441,7,9007199254740991,-10,5,-4096,4];
const v2 = [1000,13,-1,4,-256,-13904,-4294967296];
let v3 = 0;
while (v3 < 0) {
    v2.length = v3;
    v3++;
}
function f10(a11, a12, a13, a14) {
    const o25 = {
        m(a16, a17) {
            let v18 = 0;
            while (v18 < 2) {
                try { a12(v2, this, v1, a17, v18); } catch (e) {}
                a13["reduceRight"](...v2, ..."reduceRight", ...a12, 268435439, ...a12, a17);
                v18++;
            }
            return v18;
        },
        "e": 16,
    };
    return o25;
}
let v26 = f10(v0, v2, v2, 16);
const v27 = f10(v2, v2, v0, 16);
const v28 = f10(v2, v2, v0, 2147483647);
function f29(a30, a31, a32) {
    const o38 = {
        "a": a31,
        [a30](a34, a35) {
            try { this.setFloat32(16); } catch (e) {}
            a31[12] = v2;
            function f37() {
                return f10;
            }
            return v26;
        },
        "g": a30,
        [v26]: 2147483647,
        "c": f29,
        __proto__: v27,
        "h": f29,
        "b": v26,
        [-1]: v2,
        "d": a30,
        "e": 268435439,
        "f": v2,
    };
    return o38;
}
f29(v1, v0, v1);
const v40 = f29(v1, v0, v0);
f29(v1, v1, v0);
const v43 = [-0.0,2.2250738585072014e-308,5.0,1.207728181434696e+308,-5.0];
("undefined")[v43];
const o45 = {
    __proto__: v27,
    10000: v43,
    "f": v2,
};
v26 = v28;
f10(v1, v40, v27, f29);
const o47 = {
    "deleteProperty": f29,
    "get": f10,
};
new Proxy(v40, o47);
