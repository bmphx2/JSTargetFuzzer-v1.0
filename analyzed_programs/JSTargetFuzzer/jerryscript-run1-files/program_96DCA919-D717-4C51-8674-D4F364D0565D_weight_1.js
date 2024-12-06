function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = -5;
    t2.c = -5;
    this.a = -5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v4);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
    a9.f = a9;
}
const v10 = new F6(v3, v3, F0, v5, v4);
const v14 = new BigUint64Array();
v14.fill(BigInt64Array < BigInt64Array);
new F6(v3, v10);
new F6(v3, v4);
const v22 = [-10981,-9007199254740992,-4294967297,23603,-3,48204,-2,1587428063];
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F0();
const o27 = {
};
const v29 = new Proxy(v10, o27, v10, v26, v26);
const o30 = {
    [v29]: v22,
};
