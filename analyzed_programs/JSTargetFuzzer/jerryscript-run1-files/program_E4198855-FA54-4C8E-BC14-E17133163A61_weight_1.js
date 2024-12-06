function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    a5.b = a5;
    this.a = a5;
}
const v6 = new F3(1);
const v7 = new F3(-8);
new F3(v6);
function f9(a10, a11) {
    v6[a11] = a10;
}
new Promise(f9);
new Array(3);
let v20 = 0;
while (v20 < 5) {
    3 in v7;
    v20++;
}
5 - 4294967297;
