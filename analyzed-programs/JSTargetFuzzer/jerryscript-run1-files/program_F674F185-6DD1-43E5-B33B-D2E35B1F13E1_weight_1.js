function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1;
    this.h = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    const o9 = {
        "c": a8,
        "a": F6,
        ...v3,
    };
    this.h = v3;
}
new F6(v4);
const v11 = new F6(v3);
new F6(v5);
function f17() {
    return f17;
}
Math.round(-1.2063160811879037);
let v23 = 4294967297;
v5.e = v11;
v23 = 2147483649;
new BigUint64Array(257);
new Uint32Array(9);
new Uint8ClampedArray(10);
"-16" == 5n;
new Uint8ClampedArray([4.0,0.7137662539774001,800.1465636629484]);
const v40 = new BigInt64Array(512);
for (const v41 of v40) {
    async function f43(a44, a45) {
        await -1;
        return a44;
    }
    f43();
}
