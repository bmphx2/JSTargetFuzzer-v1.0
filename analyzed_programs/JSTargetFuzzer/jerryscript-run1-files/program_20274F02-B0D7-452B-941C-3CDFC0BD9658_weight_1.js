function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = (-12n).toString();
    let v6;
    try { v6 = Array.from(9007199254740990, v4); } catch (e) {}
    this.h = v6;
    this.f = 65535;
    this.c = v6;
}
const v8 = new F0();
const v9 = new F0();
new F0();
[v9,v9,255n];
[v8];
[9007199254740990n];
const v20 = [9007199254740990];
v20.length = 13;
const o22 = {
    __proto__: v20,
};
o22.indexOf(13);
