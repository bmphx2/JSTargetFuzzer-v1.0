function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 268435456;
    this.g = this;
}
new F0();
new F0();
const v5 = new F0();
new Float32Array(10);
new Float32Array(13);
new Uint8ClampedArray(v5);
const v16 = new Date();
v16.setHours();
