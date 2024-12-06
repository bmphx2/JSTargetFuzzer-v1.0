function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 0;
    this.b = 0;
}
new F0();
new F0();
new F0();
function F9() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v12 = new F9();
const v13 = new F9();
function f14(a15, a16) {
    const o22 = {
        ...v13,
        __proto__: v12,
        m(a18, a19, a20, a21) {
            return this;
        },
    };
    return o22;
}
for (const v24 in f14()) {
    f14().d;
    v13[Symbol.unscopables] = v13;
}
let v37 = -58444;
new Uint8Array(127);
new BigUint64Array(3485);
new Uint8Array(1743);
v37 = 3485;
function f47() {
    !arguments;
    [-9007199254740992,2147483647,-4,4294967297,-3,-28259,-9007199254740992,-665863452,1258727004,54404];
    new Int16Array(12);
    new Float64Array(14);
    new Uint8ClampedArray(565);
    [-325032606,1073741824,-18674,19598,-1896359703,256,1073741824,13,7,-1744872978];
    [58091,2147483648,-4096,5];
    return arguments;
}
f47(f47);
