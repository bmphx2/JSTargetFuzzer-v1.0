function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2;
    this.d = -2;
    this.e = -2;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return F0;
}
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v3;
    function f10() {
        return arguments;
    }
    const v12 = f10();
    const o13 = {
        ...v12,
    };
    this.b = F0;
}
new F7(v3);
try {
    function f15() {
    }
} catch(e16) {
}
new F7(v5);
new F7(v3);
("-1604200484").__proto__;
const v28 = new Date();
v28.setSeconds();
([2036046200,-9223372036854775807,-61646])["map"](parseInt);
