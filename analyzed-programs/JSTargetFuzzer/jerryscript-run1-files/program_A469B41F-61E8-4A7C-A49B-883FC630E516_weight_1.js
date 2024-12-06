const v3 = [2,9007199254740990,65535,11536151,-65535,-1784204567,0];
const v4 = [174037472,2147483647,32445305,-2147483648,-2147483649,4294967297,16,-1233572512];
const v5 = [536870887,-9223372036854775808,65535,255];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a8.b = a11;
    a8.c = v4;
    a11.f = a11;
}
new F6(v5, v5, v4, -65536n);
const v13 = new F6(v3, v5, -16n, v4);
new F6(v4, v3, v13, v13);
const t12 = Symbol.species;
t12.description <<= v4;
