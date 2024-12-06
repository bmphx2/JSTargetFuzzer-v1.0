const v3 = [536870889,-52103];
const v4 = [536870912,536870889,v3,-52103];
const v5 = [536870912,536870912,v3];
const v8 = -v4;
function f9() {
    return v3;
}
for (let v10 = 0; v10 < 32; v10++) {
    v3["p" + v10] = v10;
}
new BigInt64Array(4);
new BigInt64Array(64);
const v20 = new Int32Array(166);
function f21(a22, a23, a24) {
    const o25 = {
        ...v20,
    };
    return o25;
}
const v26 = f21();
Object.defineProperty(f21(), "a", { configurable: true, enumerable: true, set: f21 });
for (const v28 in v26) {
    delete v20[v28];
}
new Uint8ClampedArray(16);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f9;
    this.a = a36;
    this.b = a39;
}
new F34(536870889, v8, v4, v5);
new F34(v8, 64, v5, v4);
new F34(536870912, 536870889, v5, v4);
function f47() {
    return f47;
}
([-65878576,2147483649,469484235,-15,9007199254740990,-15,-529293684,-128]).some(f47);
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a58;
    this.f = -52103;
}
new F53(-4294967296, 5n, "global", "-16");
new F53(-4294967296, -7n, "-16", "global");
const v61 = new F53(-4294967296, 5n, "global", "global");
if ("function" == v61) {
} else {
    function F66(a68, a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a70;
    }
    const v71 = new F66(F66, "global", "function");
    new F66(v71, "global", "function");
    new F66(v71, "global", "function");
}
