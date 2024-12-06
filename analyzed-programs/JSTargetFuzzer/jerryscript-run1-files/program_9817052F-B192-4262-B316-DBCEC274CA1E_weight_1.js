function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483647;
    this.b = -2147483647;
}
new F0();
new F0();
new F0();
new Uint16Array(4012);
new Int16Array(512);
const v14 = new BigInt64Array(1646);
for (let [v16,v17,v18] of v14) {
}
new Int16Array(1646, 1646, 512);
for (let v23 = 0; v23 < 32; v23++) {
    v14["p" + v23] = v23;
}
