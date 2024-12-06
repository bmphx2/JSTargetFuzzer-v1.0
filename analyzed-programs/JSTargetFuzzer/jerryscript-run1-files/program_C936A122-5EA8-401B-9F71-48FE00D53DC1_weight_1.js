let v5 = -65537;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
}
const v11 = new F6(v5, 268435440, -536870912);
const v12 = new F6(268435440, v5, 1639584977n);
const v13 = new F6(-536870912, v5, 1639584977n);
function f14(a15, a16, a17) {
    const o28 = {
        __proto__: v11,
        "b": a17,
        "c": a17,
        "h": a17,
        "f": 1639584977n,
        toString(a19, a20) {
            for (const v21 in v13) {
            }
            v5 &= a15;
            const v25 = [a20];
            const v26 = [a17];
            [v26,v25,a19,v26,v26];
            return a16;
        },
        /*
        __proto__: a17,
        */
        "d": F6,
        [F6]: a15,
    };
    return o28;
}
f14(v5, v13, v13);
f14(v5, -1794868628n, v12);
f14(268435440, v13, v11);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v13;
}
new F32(v5, v5);
new F32(v5, 268435440);
new F32(268435440, 268435440);
function f39() {
}
new Uint8Array(0);
let v53 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v55 = new Int32Array(127);
v53 /= v55;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
