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
    this.c = a19;
}
new F16(536870887, true);
new F16(268435441, 65535);
new F16(65535, v3);
const v27 = ("-1604200484").__proto__;
try { new v27(); } catch (e) {}
