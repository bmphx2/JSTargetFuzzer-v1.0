function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = this;
}
new F0();
new F0();
new F0();
function f15() {
    return 15n;
}
const v18 = new Float32Array(3971);
v18.includes(0);
