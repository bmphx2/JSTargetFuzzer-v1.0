function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 10;
    this.g = 10;
    this.f = 10;
}
const v3 = new F0();
const v4 = new F0();
new F0();
let v10 = `
    +-65537;
    v10++;
`;
eval(v10);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v4;
    function F20(a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F20();
    const v24 = [-2.0,-1.601440531771923e+308,-1.0,-3.077642219695236e+307,1.0];
    const v25 = [5.0];
    with (v24) {
        length = v25;
    }
    this.c = a19;
}
new F16(536870887, true);
new F16(268435441, 65535);
new F16(65535, v3);
const v33 = ("-1604200484").__proto__;
try { new v33(); } catch (e) {}
