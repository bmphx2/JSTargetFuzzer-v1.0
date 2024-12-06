function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 255;
    this.f = 255;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
}
new F6(v4, v3);
const v11 = new F6(v5, v5);
const v12 = new F6(v5, v5);
const v13 = [v12];
[v11,v13];
[v13,F0,v11,v12,v4];
[-2067820721,-656231984,471412001,-2147483648,7];
[4,-2206,5,4,2,64,-128,-65536,-1];
[2147483647];
new Uint32Array(1459);
new Float64Array(2582);
new Float32Array(3086);
