function f0() {
    const o13 = {
        __proto__: "test",
        "d": f0,
        "a": "test",
        ["test"](a5) {
            [-2.2250738585072014e-308,5.0,2.220446049250313e-16,2.220446049250313e-16,0.29425244960158525];
            [Infinity,-2.2250738585072014e-308,-224.2694663878582,321121.2475316962,-2.220446049250313e-16,0.8741009843671881,-1000000000000.0,1000000000000.0,-0.613329543346854];
            [-1000000000000.0,-378.9186013725787,5.0,-1000000.0,1.144142995535779e+308,-808.03616705732,696976.1264144997,-1.7604666991746804e+308,1000000000.0,-2.220446049250313e-16];
            return 0.04022881557874591;
        },
        "c": "test",
        "h": 0.04022881557874591,
        o(a10, a11) {
            try { ("test").charCodeAt(a10); } catch (e) {}
            e = "test";
            return f0;
        },
    };
    const t19 = "test";
    t19.length = 1;
    for (let v15 = 0; v15 < 32; v15++) {
        const t22 = "test";
        t22["p" + v15] = v15;
    }
    return o13;
}
const v18 = f0();
const v19 = f0();
const v20 = v18 >= v19;
if (v20) {
    const o29 = {
        o(a24, a25, a26, a27) {
            `a`;
            return a27;
        },
    };
    ("preventExtensions").toLowerCase();
    const v31 = [v18,v20,v20];
    Reflect.apply(v19.o, v19, v31);
} else {
    v19 + v18;
}
f0();
function F39(a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a41;
    this.c = a42;
}
new F39(v18, "iterator", "iterator");
new F39(v18, "iterator", "QIoY");
new F39(v18, "iterator", "-7");
const v49 = new Int32Array(585);
try { v49.some(WeakMap); } catch (e) {}
