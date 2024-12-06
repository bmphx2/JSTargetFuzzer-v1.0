new WeakSet();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
new F5(14);
const v9 = new F5(14);
new F5(127);
class C11 extends F5 {
    static [v9];
    get h() {
        const v13 = this.__proto__;
        function f14(a15) {
            return v13;
        }
        class C16 extends f14 {
            3;
        }
        return C16;
    }
    d = 4;
    e;
    static #a = 127;
}
new C11();
new C11();
const v19 = new C11();
let v20 = -1000000000000.0;
let [] = v19;
if (v20 === 14) {
    new F5(127);
    1.5611971461309976e+308 || 1;
    Math.log(1.5611971461309976e+308);
    1 + 1;
} else {
    v20++;
}
