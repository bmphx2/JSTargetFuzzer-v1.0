function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
new F3(1073741824, 10);
const v8 = new F3(1073741824, 35990780);
const v9 = new F3(1073741824, 1073741824);
new Float32Array(1750);
v9.c |= 35990780;
let v16 = "2r3z";
v8[65536] >>= 1750;
new Uint16Array(198);
new BigUint64Array(868);
const v22 = [];
v22[v16];
v16 &= v16;
const v25 = Symbol.species;
v22[v25] = v25;
const o27 = {
    p() {
        this[v22] = this;
        return v22;
    },
};
