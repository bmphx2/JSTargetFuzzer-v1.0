function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = false;
    this.d = a5;
    this.c = undefined;
}
const v6 = new F2(undefined, false);
const v7 = new F2(F2, undefined);
const v8 = new F2(false, v6);
const v9 = [-6,-128,536870888,61504,10,2,24610,-65535];
const v10 = [-11127,65537,-1024,1281983734,2147483649,186398900,1073741825,7];
const v11 = [3];
function f12(a13, a14) {
    const o21 = {
        "b": F2,
        toString(a16, a17) {
            v9.length = 2642983353;
            new WeakSet();
            return 2642983353;
        },
        "h": a13,
        10000: F2,
        "f": v9,
    };
    return o21;
}
f12(v10, v8);
const v23 = f12(v11, v7);
with (f12(v10, v6)) {
    f = false;
    v23[-1] = v8;
}
Object.defineProperty(v9, 3n, { writable: true, set: f12 });
new Float32Array(1235);
new Int16Array(16);
new BigInt64Array(4);
