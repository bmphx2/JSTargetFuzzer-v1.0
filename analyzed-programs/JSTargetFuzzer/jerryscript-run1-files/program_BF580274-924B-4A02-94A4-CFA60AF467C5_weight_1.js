function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870889;
}
new F0();
new F0();
const v5 = new F0();
function f10() {
    return 5;
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
}
const v15 = new F11(v5, 5);
const v16 = new F11(v15, 536870912);
new F11(v16, 536870912);
const v28 = new Int32Array(255);
let [,,...v29] = v28;
Math.log2(4294967296 - 4294967296);
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a40;
    this.f = -4294967296;
}
new F35(-4294967296, 5n, "global", "-16");
new F35(-4294967296, -7n, 5n, "global");
const v43 = new F35(-4294967296, 5n, v5, "global");
if (v43 == v43) {
} else {
    function F48(a50, a51, a52) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a52;
    }
    const v53 = new F48(F48, "global", "function");
    new F48(v53, -1, "function");
    new F48(v53, "global", "function");
}
