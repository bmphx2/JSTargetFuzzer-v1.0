function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -15;
    this.f = -15;
    this.g = -15;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[F0,F0,F0];
const v7 = [v4,v5,v5,F0];
[v5,v5,v7];
function f9() {
    return v5;
}
let v17 = 0;
while (v17 < 10) {
    Object.defineProperty(delete v7?.length, 1, { set: f9 });
    v17++;
}
