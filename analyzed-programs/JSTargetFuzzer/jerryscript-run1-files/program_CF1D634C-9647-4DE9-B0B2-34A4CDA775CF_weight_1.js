function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483647;
    this.e = 2147483647;
    this.g = 2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v4, v4, v3);
[v5,F0,v4,v5,v3,v5,F0];
const v7 = [F0,v3,v4];
[v3,v7,v7,F0,v4];
-Infinity;
let v16 = -9007199254740990n;
v16 -= 9223372036854775807n;
v16--;
