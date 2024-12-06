function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870888;
    this.g = 536870888;
    const v3 = this.c;
    let v4;
    try { v4 = v3(v3); } catch (e) {}
    let v5;
    try { v5 = v4(); } catch (e) {}
    let v6;
    try { v6 = new v5(v5, 536870888); } catch (e) {}
    function f7() {
        return v6;
    }
    this.e = 536870888;
}
new F0();
new F0();
new F0();
const v21 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v21.fill(-3);
