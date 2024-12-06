function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 6;
}
new F0();
new F0();
const v5 = new F0();
if (v5 >= -16956) {
    v5.c >= -3;
} else {
    new F0();
    new F0();
}
