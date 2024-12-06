function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
    this.h = 1;
    this.b = 1;
}
const v3 = new F0();
new F0();
new F0(v3);
const v14 = new Date(2407);
Object.defineProperty(v14, 6, { value: v14 });
