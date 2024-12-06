const v4 = new Set();
function f5() {
    return v4;
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.d = a10;
}
new F6("-10", "uj", "c", "c");
new F6("-10", "uj", "c", "uj");
new F6("uj", Set, "c", "uj");
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F18(-5187, -5187, "-10");
new F18(1000, 268435440, "c");
new F18(268435440, 1000, "-10");
function f26() {
}
new ReferenceError(57486);
let v40 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v42 = new Int32Array(127);
v40 /= v42;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
