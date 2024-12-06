function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -34147;
}
new F0();
new F0();
new F0();
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = new F0();
Reflect.apply(([-645679.1757705609,NaN,596.3498861933385,1000000000.0,-5.0,3.452199136921493]).pop, v14);
