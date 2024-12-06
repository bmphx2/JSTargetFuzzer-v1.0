function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    F7.h = 1000n;
    this.e = 3;
}
new F7(-1073741824, 268435441n, 3, 1073741824n);
new F7(-1649057546, -1073741824, -1649057546, 1073741824n);
new F7(F7, -1649057546, -1073741824, 1000n);
const v20 = new Date();
v20.setUTCSeconds();
