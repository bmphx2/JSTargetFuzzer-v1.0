function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.a = a9;
    this.d = a9;
}
new F6(1073741824, 1352836636, 6);
new F6(-5, 1352836636, 1073741824);
new F6(1352836636, 9007199254740990, 9007199254740990);
function f20() {
    return F6;
}
const v24 = new Uint32Array(512);
v24.reduceRight(f20, -1737367591);
