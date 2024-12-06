function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = [v4,v3,v5,[v5,v5]];
[v7,v3,v7];
new Number(3);
new Float32Array(129);
new Float64Array(6);
([5]).splice();
