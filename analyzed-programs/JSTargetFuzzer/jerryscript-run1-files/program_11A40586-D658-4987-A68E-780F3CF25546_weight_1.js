function f3() {
    return 9007199254740990;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
}
const v8 = new F4(-9223372036854775808, 21560);
new F4(-9223372036854775808, -9223372036854775808);
const v10 = new F4(21560, -9223372036854775808);
function f14(a15, a16) {
    const v17 = delete v10[a16];
    try { a16(...v17, v17, -9223372036854775808, v17); } catch (e) {}
    v8[3606636274];
    return -268435456;
}
f14(4294967297, v8);
