function f0() {
}
function f1() {
    return f0;
}
new Array(Array);
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = Array;
    this.e = a7;
}
new F5(f0);
new F5(F5);
new F5(f0);
const v14 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
try { v14.reduceRight(v14, v14); } catch (e) {}
