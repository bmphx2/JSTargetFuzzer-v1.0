const v11 = new WeakMap();
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483648n;
    this.g = 41713n;
    this.a = a18;
}
new F15("arguments", 1073741823n, 58972n);
const v21 = new F15("NEGATIVE_INFINITY", 14n, 14n);
new F15("arguments", 14n, 1663844724n);
v21[-1] = "NEGATIVE_INFINITY";
"128" !== v11;
