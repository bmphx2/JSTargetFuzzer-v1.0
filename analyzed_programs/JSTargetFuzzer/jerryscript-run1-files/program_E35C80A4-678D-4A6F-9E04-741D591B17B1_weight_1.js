function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4.0;
    this.h = a5;
    this.a = 4.0;
}
new F3(4.0);
new F3(-2.220446049250313e-16);
const v8 = new F3(2.2250738585072014e-308);
[F3,2.2250738585072014e-308,v8,v8,v8];
const v10 = [F3];
[v10,v8,v10,4.0];
const v17 = Array(257);
v17.includes(v17, 257);
