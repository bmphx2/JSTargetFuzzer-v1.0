const v0 = [1000000000.0,4.0,-3.2405367470279955,7.039943852414147e+307,-1.3629633033741932e+308,1.5024692913271423e+308];
const v1 = [-223804.94670673984,2.220446049250313e-16,-1000000.0,-1.541091483609228e+308,1.2798063030331153e+308];
let v2 = [1000.0,1.7976931348623157e+308];
class C3 {
    static f = v0;
    set b(a5) {
        this[this] = this;
        try {
            super.valueOf(v2, v1, a5);
        } catch(e7) {
        }
    }
    m(a9, a10) {
        ++v2;
        function f12(a13, a14, a15, a16) {
            f12 <<= a13;
            f12 = C3;
            const o21 = {
            };
            new Proxy(this, o21);
            return o21;
        }
        f12(v1, v0, a10, a10);
        return v2;
    }
}
new C3();
new C3();
const v27 = new C3();
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -128;
}
const v35 = new F31(536870888, -128);
new F31(v2, v2);
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
    this.e = C3;
}
new F37(v35, F31);
const v42 = new F37(v2, v27);
new F37(536870888, v42);
new F31(536870888, 536870912);
function F49() {
    if (!new.target) { throw 'must be called with new'; }
    JSON.parse("-1858959936");
}
new F49();
