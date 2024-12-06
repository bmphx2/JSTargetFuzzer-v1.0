function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992;
    this.d = 9007199254740992;
    this.a = 9007199254740992;
}
const v3 = new F0();
new F0();
new F0();
new Float64Array(512);
new Uint8ClampedArray(255);
const v17 = new Uint8Array(8);
const v18 = 512 | Uint8ClampedArray;
const v19 = [v18];
[v19,v19,v17,v19,v17];
const v21 = [512,F0,v18,v3];
let v22 = 0;
do {
    v21.length += 9;
    v22++;
} while (v22 < 10)
