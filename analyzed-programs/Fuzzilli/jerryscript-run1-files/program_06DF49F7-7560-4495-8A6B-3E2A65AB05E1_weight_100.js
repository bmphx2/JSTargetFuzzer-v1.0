function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.h = -13n;
    this.b = -10n;
}
new F3(-10n);
new F3(-10n);
const v8 = new F3(16n);
536870889 > 1073741823;
let v16 = 0;
while (v16 < 10) {
    const o22 = {
    };
    new Proxy(v8, o22);
    v16++;
}
