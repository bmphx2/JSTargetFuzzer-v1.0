function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1(v3, v3, F1);
const v5 = new F1();
[13,v3,F1,f0,9223372036854775807,13,v3];
[[F1,F1,[13,1,v4],v5],13,f0,F1,f0];
[[v4,9223372036854775807,9223372036854775807,9223372036854775807]];
const o20 = {
    set f(a19) {
    },
};
new Float64Array(4011);
