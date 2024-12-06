function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -12;
}
const o7 = {
    n(a4, a5) {
        for (const v6 of a4) {
        }
        return this;
    },
};
try { o7.n(o7, o7); } catch (e) {}
new F0();
const v10 = new F0();
v10[1439];
const v13 = new Int16Array();
v13.fill(v13, Int16Array, Int16Array) != 5n;
new F0();
new Uint8Array(1000);
const v23 = new BigInt64Array(1000);
const v26 = new Uint16Array(1);
[[v26,v10],v26];
[v23];
-9223372036854775807 >= 78;
