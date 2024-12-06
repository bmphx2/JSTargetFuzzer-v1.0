function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F0;
    this.h = 23520;
}
const v3 = new F0();
new F0();
const v5 = new F0();
[-9007199254740990,v5,v5,F0];
const v10 = [v5,v3,F0];
[v10,-9007199254740990,-65536,v10,v10];
new Uint16Array(128);
new Uint8ClampedArray(1887);
new Uint8ClampedArray(249);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = new F21();
const v26 = ([-645679.1757705609,NaN,596.3498861933385,1000000000.0,-5.0,3.452199136921493]).pop;
Reflect.apply(v26, v23, v26);
