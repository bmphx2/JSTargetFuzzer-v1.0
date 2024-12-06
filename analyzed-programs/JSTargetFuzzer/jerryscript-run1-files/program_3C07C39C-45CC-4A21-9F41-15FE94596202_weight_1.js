function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10000;
    this.e = 10000;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Float64Array(1770);
new Int32Array(7);
new BigInt64Array(6);
const v16 = Symbol.toPrimitive;
const v18 = Symbol.split;
Symbol[v18] = v18;
try { v4.resolve(v3, Int32Array, 1770); } catch (e) {}
new Int16Array(3644);
new Float32Array(512);
new Uint16Array(3320);
const o32 = {
    [v16]() {
        try {
            function f30() {
            }
        } catch(e31) {
        }
    },
};
Int32Array || 536870887;
const v37 = !Int32Array;
536870887 >>> v37;
Math.random();
520825818 >> v37;
