function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a8.g = a8;
    this.e = v4;
}
new F6(v5, v5);
new F6(v4, v5);
new F6(v3, v3);
[13,536870889,2147483649,-1073741824,-4047,536870912,5,1409156923,255,1073741825];
[559369254,50716,-225052953,268435441,45012];
[1316498043,287156565,-1117666295,4294967297,12,1024,0,15,-4294967297];
function f22(a23, a24, a25) {
    return a23;
}
const v27 = [1e-15,9.323130580524804,-2.0,-1.0];
const v29 = [f22];
Reflect.apply(v27.forEach, Math, v29);
