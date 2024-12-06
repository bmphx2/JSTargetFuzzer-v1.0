function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.d = "e";
}
const v6 = new F3(F3);
const v7 = new F3(F3);
const v8 = new F3(v6);
[v7,[F3,[v8],v8,v7],F3];
new Int32Array(0);
new BigUint64Array(15);
new Uint16Array(257);
([2036046200,-9223372036854775807,-61646])["map"](parseInt);
