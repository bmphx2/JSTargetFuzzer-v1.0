function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v3,v3];
const v7 = [v4,v6,v5];
[v7,v5,F0,v7,v5];
function f9() {
    return v5;
}
const v14 = [Infinity];
const v15 = [-9.40814191403733];
class C16 extends Date {
    constructor(a18, a19) {
        super(v6);
    }
}
new C16(v14, v15);
