function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4096;
    this.g = 4096;
}
const v3 = new F0();
new F0();
new F0();
new WeakSet();
const v13 = new Uint8ClampedArray(257);
let v15 = Int8Array;
const v16 = new v15(3836);
const v19 = new BigInt64Array(1);
const v20 = v19[453379814];
v15 = v20;
v15 = v16;
v15[v20];
Object.defineProperty(v16, 2285046296, { writable: true, enumerable: true, value: -65535 });
const v25 = [v13,2147483647,-5,257,v16];
[v25,3836,v25];
[22249,Uint8ClampedArray,1,v3];
