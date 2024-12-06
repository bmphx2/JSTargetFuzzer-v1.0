function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483649;
    this.h = -2147483649;
    this.f = -2147483649;
}
new F0();
new F0();
new F0();
for (let i14 = 0, i15 = 10; i15 < i15; i14++) {
    continue;
}
