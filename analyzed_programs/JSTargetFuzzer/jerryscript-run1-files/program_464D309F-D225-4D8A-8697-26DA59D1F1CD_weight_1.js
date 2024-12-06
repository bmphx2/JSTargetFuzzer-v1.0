function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 6599;
    this.b = 6599;
}
new Map([[-9223372036854775808,-8,9187]]);
new F0();
new F0();
new F0();
const v18 = new Float64Array(1000);
try {
    new WeakSet(v18);
} catch(e21) {
}
