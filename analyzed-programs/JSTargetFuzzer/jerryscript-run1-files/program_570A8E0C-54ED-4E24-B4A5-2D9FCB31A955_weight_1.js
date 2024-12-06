function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -5;
    this.e = -5;
    this.c = -5;
}
new F0();
new F0();
new F0();
new Float64Array(127);
new Int16Array(2);
new Int32Array(637);
const v18 = new BigUint64Array(6, 6);
const v21 = new Uint8Array(637);
const v23 = [16,6,6];
Reflect.apply(v18.copyWithin, v21, v23);
