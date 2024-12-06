function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1520435289;
    this.f = 1520435289;
}
new F0();
new F0();
new F0();
new Int16Array(2);
new Int16Array(7);
new Uint16Array(13);
const v18 = [-1009314961,-2147483648,-24,257,-281449773];
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    const v22 = `
        class C23 {
        }
    `;
    eval(v22);
    v18.copyWithin(-3);
}
new F20();
