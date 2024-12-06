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
    this.f = a9;
}
const v10 = new F6(v3, v3, F0, v5, v4);
new F6(v3, v10);
new F6(v3, v4);
const v16 = [-10981,-9007199254740992,-4294967297,23603,-3,48204,-2,1587428063];
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = new F17();
const o21 = {
};
const v23 = new Proxy(v10, o21, v10, v20, v20);
const o24 = {
    [v23]: v16,
};
