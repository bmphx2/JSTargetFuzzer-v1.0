function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -10;
}
let v3 = new F0();
let v4 = new F0();
new F0();
const v8 = new Int32Array(5);
new Uint32Array(2807);
new Float64Array(2807);
v8 instanceof Float64Array;
--v3;
Math.cos(v4);
v4--;
268435440 !== Symbol.search;
