class C3 {
    static get b() {
        return -2;
    }
    [128n] = 128n;
    [-2147483647n] = -2147483647n;
}
new C3();
new C3();
new C3();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C3;
}
new F17(-2147483647n, -6060n);
Reflect.apply(("undefined").localeCompare, "undefined");
new F17(-2147483647n, -2147483647n);
new F17(128n, 128n);
const v32 = new Date();
let v33 = 0;
for (let i = 0; i < 5; i++) {
    v32.setMonth(v33);
    v33++;
}
