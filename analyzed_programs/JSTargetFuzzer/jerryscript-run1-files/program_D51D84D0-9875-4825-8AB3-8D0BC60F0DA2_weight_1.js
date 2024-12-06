class C9 {
    static p(a11, a12, a13) {
        let [v14] = "MIN_SAFE_INTEGER";
        try { new v14(128, -3.0, "c", this); } catch (e) {}
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == -1634287392;
                        const o27 = {
                            "h": v26,
                            "b": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
        return o29;
    }
    static get b() {
        let v30 = this;
        v30 /= v30;
        return "MIN_SAFE_INTEGER";
    }
    d = -3.0;
}
new C9();
new C9();
new C9();
function f34() {
    return -3.0;
}
var f = 128;
typeof f34 === "symbol";
for (let v39 = 0; v39 < 32; v39++) {
    C9["p" + v39] = v39;
}
const v43 = new Uint32Array(181, f34, Uint32Array);
let v45 = BigUint64Array;
let v46 = new v45(1);
let v47 = 253;
[v47,,v45,v46] = v43;
try { v45["abs"](181, v47, v45); } catch (e) {}
new Uint16Array(v47);
function f57(a58, a59) {
    delete v43[10];
    return 0.0;
}
f57(1.4941314998538212e+308, 339);
for (let i65 = 0;
    (() => {
        const v71 = new Int8Array(4096);
        Function("x", [256,9,4096,[v71,Float64Array]]);
        return i65 < 2;
    })();
    i65++) {
    const v82 = new Function("x");
    v82.name;
}
Function();
