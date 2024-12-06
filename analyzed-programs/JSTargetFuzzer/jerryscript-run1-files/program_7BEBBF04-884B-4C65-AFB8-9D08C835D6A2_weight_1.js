function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 11;
    this.c = 11;
    this.b = 11;
}
new F0();
new F0();
new F0();
const v12 = -Infinity;
const v14 = new Int16Array();
v14[v12];
