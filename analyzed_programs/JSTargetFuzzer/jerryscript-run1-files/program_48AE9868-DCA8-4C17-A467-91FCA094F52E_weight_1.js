new Set();
function f11(a12, a13, a14, a15) {
    const o22 = {
        __proto__: a14,
        n(a17, a18) {
            for (let v19 = 0; v19 < 32; v19++) {
                a14["p" + v19] = v19;
            }
            return a15;
        },
        1073741824: a15,
        "h": 0.0,
        268435439: "2147483647",
        "a": a15,
        ["2147483647"]: "boolean",
        11: "boolean",
        ..."apply",
        [a13]: a15,
    };
    return o22;
}
f11(1e-15, "2147483647", "apply", 1000.0);
f11(2.220446049250313e-16, "apply", "apply", 0.0);
let v25 = 0;
while (v25 < 2) {
    v25++;
}
f11(-1000000000.0, "2147483647", "2147483647", 1000.0);
const v35 = new Array(10);
function f39(a40, a41, a42, a43) {
    const o53 = {
        "g": 4096,
        ...a43,
        "e": a41,
        set b(a45) {
            function F46(a48, a49) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a48;
            }
            const v50 = new F46(a43, 129);
            new F46(a42, v50);
            new F46(F46, 481111932);
        },
    };
    return o53;
}
let v54 = f39(4096, 481111932, 129, v35);
f39(10, 481111932, 10, f39);
f39(v54, 4096, 481111932, 4096);
v54.g;
try {
    let v58;
    try { v58 = v54.isSealed(); } catch (e) {}
    v54 = v58;
    v58 = v58;
} catch(e59) {
    e59[0] = e59;
    try { e59(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
