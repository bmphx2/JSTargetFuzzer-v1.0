function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6(a7, a8) {
    const o20 = {
        set c(a10) {
            [a10] = a10;
            try { a10(a8, this, a7, a10); } catch (e) {}
            new Date();
            try { a7(a8, a7, v3); } catch (e) {}
            Object.defineProperty(this, "c", { get: Date });
            const v17 = new Float32Array(198);
            new Int32Array(v17);
        },
        [v3]: a8,
        __proto__: v4,
        [a7]: v4,
        [a8]: v4,
    };
    return o20;
}
f6(f6(f6(v4, v4), v4), v4);
[15,1526446148,-10,0,6,0,-59064,1446717194,-167950121];
[536870887,-1715524611,12,3,31971998,536870912,16];
[2147483647,-1073741824,-6,536870889,-10,2,51454,-9007199254740992,-48468];
new BigInt64Array(1);
new BigUint64Array(16, BigInt64Array);
new Uint16Array(84);
new Float32Array(4096);
new Uint16Array(4096);
const v50 = new Uint16Array(10);
v50[30];
