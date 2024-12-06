const v4 = new RangeError();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { v4.forEach(a8, v4); } catch (e) {}
}
new F5();
function f20() {
    (9)[2147483648];
    return 9;
}
f20();
