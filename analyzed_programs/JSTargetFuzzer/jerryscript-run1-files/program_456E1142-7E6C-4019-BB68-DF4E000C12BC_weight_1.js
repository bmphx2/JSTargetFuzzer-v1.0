const v2 = new Int8Array(3);
v2 % v2;
Int8Array % v2;
v2.toString = 3;
new BigUint64Array(1000);
const v13 = new BigUint64Array(1894);
-7n + BigUint64Array;
delete v13[223];
const v33 = new Float32Array(3750);
const v36 = ("e").endsWith;
Reflect.apply(v36, v33);
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a43;
    this.f = -4294967296;
}
new F38(-4294967296, 5n, "global", "-16");
new F38(-4294967296, v36, "-16", "global");
const v46 = new F38(-4294967296, 5n, "global", "global");
if ("function" == v46) {
} else {
    function F51(a53, a54, a55) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a55;
    }
    const v56 = new F51(F51, "global", "function");
    new F51(v56, "global", "function");
    new F51(v56, "global", "function");
}
