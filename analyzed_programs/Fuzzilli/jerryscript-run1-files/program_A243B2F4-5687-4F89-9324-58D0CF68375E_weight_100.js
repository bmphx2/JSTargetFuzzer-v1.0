const v0 = /f[](?:a{5,1000000}){3,1000000}/uyid;
const v1 = /4nX/vgmsi;
const v2 = /9(x)(x)(x)\3/vgsi;
let v5 = "name";
function f6(a7, a8, a9) {
    const o18 = {
        ...a7,
        "f": v1,
        "e": v1,
        "a": a8,
        "c": a8,
        ...v0,
        "h": a9,
        "g": v0,
        "b": v0,
        get d() {
            const v11 = v0 === a8;
            const v13 = Symbol.toPrimitive;
            const o17 = {
                [v13]() {
                    v5 *= a8;
                    new WeakMap();
                    return v11;
                },
            };
            return o17;
        },
    };
    return o18;
}
f6(f6, "bUHKI", v0);
const v20 = f6(v1, v5, v2);
const v21 = f6(v20, v5, v0);
function f22(a23, a24) {
    const o34 = {
        [v21](a26, a27, a28) {
            this[4] = "d";
            for (let v29 = 0; v29 < 32; v29++) {
                const t38 = "d";
                t38["p" + v29] = v29;
            }
            try {
                super.n(a28);
            } catch(e33) {
            }
            return v1;
        },
        "e": v21,
    };
    return o34;
}
f22(v2, v20);
const v36 = f22(v1, v21);
f22(v0, v36);
const t53 = "d";
t53.length |= v5;
const o38 = {
    __proto__: v1,
};
for (const v39 of "d") {
    let v40;
    try { v40 = new v39(v39, v20, v20, v39); } catch (e) {}
    v20.d = v40;
    v39 || v36;
}
Object.defineProperty(v20, "bUHKI", { configurable: true, enumerable: true, value: v5 });
