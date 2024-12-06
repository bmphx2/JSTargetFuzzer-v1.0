function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 55416;
    this.d = 55416;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Uint8ClampedArray(3126);
new Float32Array(45);
new Uint8ClampedArray(6);
const v18 = [v5,v3,Uint8ClampedArray];
let v19 = [45,v5,536550780n,6,45];
v19 &= [10000n,45,v18,F0,v3];
