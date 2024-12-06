new Date();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a10;
}
new F8(-7758, 9, F8);
const v14 = new F8(14647, 14, 1073741824);
const v15 = new F8(-7758, 14647, v14);
const v17 = [2147483647,-7758,[v15],9];
[v17,v17];
try { ArrayBuffer(); } catch (e) {}
