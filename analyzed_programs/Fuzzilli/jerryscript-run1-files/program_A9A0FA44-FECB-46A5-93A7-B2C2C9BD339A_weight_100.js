function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F0;
    this.g = v3;
    this.d = v4;
}
new F6(v4);
new F6(v5);
const v11 = new F6(v3);
[536870889,65535,-2,-10,-1024,-923442885,128,-2,268435441,1882180059];
[25544,63316,6,-1272788801,-9223372036854775807,-15];
[4,8,1632968539,-2147483649,128,3,-536870912,-11359];
-v11 || -1000000000000.0;
Math.fround(2147483647);
Math.cbrt(2147483647);
const v29 = 268435441 & 2147483647;
Math.cos(268435441);
-4 ^ v29;
