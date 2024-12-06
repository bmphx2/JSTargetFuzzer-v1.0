function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
const v6 = new F3(-13n);
const v7 = new F3(23074n);
new F3(v7);
[[v7,23074n]];
[v6,-13n,268435441];
let v18 = 2147483648n;
v18 %= v18;
