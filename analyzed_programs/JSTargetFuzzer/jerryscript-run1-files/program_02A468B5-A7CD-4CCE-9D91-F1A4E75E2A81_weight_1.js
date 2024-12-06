function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 59307;
}
const v3 = new F0(F0);
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5];
[v3,v4,F0,[v6,F0,v3]];
new Uint16Array(485, v6, v6);
new Uint16Array(2);
new BigInt64Array(8);
(-2n) ** 36564n;
