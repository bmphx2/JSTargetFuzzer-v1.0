const v1 = new WeakMap();
const v5 = ["getPrototypeOf",WeakMap];
for (const v6 of v5) {
    try { new v6(); } catch (e) {}
}
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a11;
    this.g = "apply";
}
const v13 = new F8("apply", "z", F8);
const v14 = new F8(v13, "getPrototypeOf", "getPrototypeOf");
const v15 = new F8(v5, v14, "apply");
const v16 = [v5,WeakMap];
const v17 = ["apply",v1,v16];
const v23 = new Array(12);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = Array;
    new String(12);
    const v32 = new Int32Array(166);
    delete v32["getPrototypeOf"];
    this.g = a27;
}
const v34 = new F24(v23, -1024n);
const v35 = new F24(v23, -1024n);
const v36 = new F24(v23, -6n);
function f37() {
}
v5.valueOf = Array;
const v38 = [v36,v23,v34,Array];
[v13,F24,v38,v38,v17];
[v35,v15,F8,v16];
Array(12);
function* f49(a50, a51, a52, a53) {
    yield* "object";
}
Math[Symbol.toStringTag] = WeakMap;
new Uint8Array(0);
let v65 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v67 = new Int32Array(RegExp);
v65 /= v67;
new WeakMap();
new BigInt64Array(2);
([5]).reverse();
