function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65535;
    this.f = 65535;
}
const v3 = new F0(F0, F0);
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.unscopables = v5;
}
new F6(v4);
new F6(v4);
new F6(v3);
[[v3],[v4,v3],v5];
for (let v15 = 0; v15 < 5; v15++) {
    const v16 = `
        let v18 = +-65537;
        v18++;
    `;
    eval(v16, F0);
}
