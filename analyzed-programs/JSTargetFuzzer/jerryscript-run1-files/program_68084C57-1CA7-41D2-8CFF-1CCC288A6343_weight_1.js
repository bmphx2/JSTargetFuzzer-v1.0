const v3 = [10000,1073741823];
const o4 = {
};
const v6 = new Proxy(v3, o4);
o4[64] = -1073741824;
const v7 = [1073741823];
const v8 = [v7,1073741823,v7,-1073741824];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
    this.g = a13;
    v7[this] -= 10000;
    function f14() {
        return v6;
    }
    this[1] = a12;
    this.e = a12;
}
const v15 = new F9(-1073741824, v8, v7);
new F9(1073741823, 10000, v3);
new F9(v8, v15, v3);
BigUint64Array == (1299275085 === [-65537,-29829,1073741824,11,-422315430,1024]);
