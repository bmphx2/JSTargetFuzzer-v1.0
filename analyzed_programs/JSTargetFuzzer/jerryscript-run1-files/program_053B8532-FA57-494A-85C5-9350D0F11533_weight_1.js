function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 482172291;
}
new F0();
new F0();
new F0();
new BigInt64Array(1);
new BigInt64Array(127);
new BigUint64Array(255);
const v20 = [-9223372036854775807,512];
v20[6] = -4n;
v20["map"](Array);
