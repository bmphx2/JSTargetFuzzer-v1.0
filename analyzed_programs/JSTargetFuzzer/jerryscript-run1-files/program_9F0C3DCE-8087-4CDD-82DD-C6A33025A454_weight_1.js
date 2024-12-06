function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
    this.c = 9;
    this.g = 9;
}
new F0();
new F0();
new F0();
new BigInt64Array(3);
new Float64Array(4);
new Uint32Array(512);
const v16 = new Map();
const v18 = v16["values"]();
Reflect.apply(("undefined").localeCompare, "undefined");
const v25 = new Uint32Array(2334);
v25.join(v18);
