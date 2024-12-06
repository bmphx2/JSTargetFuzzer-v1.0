function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -3;
}
const v3 = new F0();
new F0();
new F0(v3);
const v8 = new Float64Array(7);
const v11 = new Float32Array(5);
new Uint8Array(8, v8, v11);
{
}
let v15 = 0n;
v15 /= 22230n;
