function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1;
    this.e = 1;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
}
new F12(340707411, v4);
const v17 = new F12(536870912, v5);
new F12(340707411, v17);
new WeakSet();
const v35 = new URIError(512);
const v38 = new Int16Array(447);
new Uint32Array(2438);
function f45() {
}
function f51(a52, a53) {
    const o54 = {
        "c": v38,
    };
    return o54;
}
f51(4.0, 26357);
f51(4.0, "m");
f51(4.0, 886.0009926550579);
v35.description <<= 2006448021;
const v60 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v60.copyWithin(v60, v60));
new Uint8Array(0);
let v71 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v73 = new BigUint64Array(127);
v71 /= v73;
new WeakSet();
for (let v80 = 0; v80 < 32; v80++) {
    const t39 = "m";
    t39["p" + v80] = v80;
}
new BigInt64Array(2, -14, v38);
([5]).reverse();
