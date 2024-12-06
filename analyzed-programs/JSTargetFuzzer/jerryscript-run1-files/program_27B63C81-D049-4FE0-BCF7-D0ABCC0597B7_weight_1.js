function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = "all";
    t2.h = a5;
    this.a = "16";
}
const v7 = new F3("16", "p");
const v8 = new F3(F3, F3);
const v9 = new F3(v8, v8);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v9;
}
new F10(v8, v9);
new F10(v7, v8);
new F10(v9, v9);
JSON.parse("2147483647");
