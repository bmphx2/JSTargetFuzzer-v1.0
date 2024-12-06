function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 7;
    this.d = 7;
    this.f = 7;
}
const v3 = new F0();
const v4 = new F0();
new F0(v3, v4, v3);
new Float32Array(6);
new Uint8ClampedArray(6);
new Uint8ClampedArray(7);
const v20 = new Uint16Array(7);
const v21 = [9007199254740992,2986,-2132228841,-2];
const v22 = [v21,v21,v21];
class C25 {
    [v20] = -10;
    [v21] = v22;
    [-10] = 7;
}
