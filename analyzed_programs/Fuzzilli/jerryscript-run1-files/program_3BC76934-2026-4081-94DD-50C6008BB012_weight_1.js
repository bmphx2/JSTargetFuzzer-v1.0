function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 0;
    this.e = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.f = v5;
}
const v9 = new F6(v3);
new F6(v4);
new F6(v5);
const v12 = [129,-48613];
const v13 = [-42435,-128,-4294967295,-9007199254740992,65536,3];
[6,1000,16,1073741823,4294967297,2147483647,2147483647];
const o18 = {
    __proto__: v3,
    "g": F0,
    0: v9,
    [v4]: v13,
};
14n instanceof F6;
v13 == -4294967295n;
v9.f >>= F6;
v12[-9007199254740990n] = -9007199254740990n;
