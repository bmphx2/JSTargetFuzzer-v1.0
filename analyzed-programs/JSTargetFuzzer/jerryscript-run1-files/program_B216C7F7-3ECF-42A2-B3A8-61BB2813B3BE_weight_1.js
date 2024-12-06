function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9223372036854775807;
    this.b = 9223372036854775807;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v5];
const v7 = [v6,F0,v4,v6,v6];
[v4,v7,v7,F0];
function f9() {
    return f9;
}
let v16 = -4294967296n;
v16 |= v16;
