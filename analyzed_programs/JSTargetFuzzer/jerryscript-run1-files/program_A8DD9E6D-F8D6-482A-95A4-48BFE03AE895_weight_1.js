function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 8;
    this.a = 8;
}
const v3 = new F0();
const v4 = new F0();
new F0();
if (v4) {
    new Uint8Array(30);
    new BigUint64Array(1000);
    new BigInt64Array(4096);
} else {
    var a = v3;
}
new WeakSet();
[10000,27586,-1479308211,-3,65262,-2,-256,8];
[2,2147483648,4,255];
[-538913957,6,10,-2147483647];
new Uint16Array(170);
new Float64Array(249);
new Uint16Array(128);
const v34 = new Uint8Array(1311);
const v36 = ("object").charCodeAt;
try { v34.sort(v36); } catch (e) {}
