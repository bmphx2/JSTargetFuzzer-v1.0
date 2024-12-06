function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -22003;
}
new F0();
const v4 = new F0();
new F0();
const v7 = Symbol.species;
v4[v7] = F0;
const v8 = v7[6];
try { v8(); } catch (e) {}
const v20 = new Date();
v20.setUTCSeconds(Date, Date);
