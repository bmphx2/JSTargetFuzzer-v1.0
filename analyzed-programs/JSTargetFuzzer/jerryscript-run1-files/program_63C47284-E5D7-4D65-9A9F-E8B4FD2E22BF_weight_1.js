const v0 = [-128];
const v1 = [9007199254740991,-4096,65537,2147483647,4,4096];
const v2 = [20718];
function f3(a4) {
    const o10 = {
        "h": v2,
        "a": a4,
        o(a6) {
            let v7;
            try { v7 = new a6(a4, v1, this); } catch (e) {}
            try { v7(...v1, a4, ...v0, ...v1); } catch (e) {}
            v0 & v0;
            return this;
        },
        [v1]: v0,
        "d": a4,
        "f": a4,
        "h": v2,
        "d": a4,
    };
    return o10;
}
const v11 = f3(v0);
const v12 = f3(v2);
const v13 = f3(v2);
function f14(a15, a16, a17) {
    const o26 = {
        ...a16,
        "h": a15,
        "d": v2,
        m(a19, a20, a21, a22) {
            v12[2147483649] ^= a21;
            return typeof a19 === "undefined";
        },
        ...v12,
        [v0]: a16,
        [a15]: a16,
    };
    return o26;
}
f14(v11, v13, v12);
f14(v11, v13, v12);
f14(v13, v11, v12);
new Set();
const v32 = [5.0];
const v34 = new Set(v32, v32);
v34.values();
