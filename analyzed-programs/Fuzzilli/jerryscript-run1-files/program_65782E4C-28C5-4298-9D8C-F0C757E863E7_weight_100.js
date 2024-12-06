function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 4294967297;
    this.c = 1563922899;
    this.g = 4294967297;
}
new F9(4294967297, 43551, 1.0, 4294967297);
new F9(-57346, 116148974, 1.0, -57346);
const v17 = new F9(1024, 116148974, 1.0, 1024);
for (const v18 in v17) {
    let v19;
    try { v19 = v18(v17, F9); } catch (e) {}
    try { v19(v19, -57346, v18); } catch (e) {}
    1563922899 ^ v18;
    v19[Symbol.isConcatSpreadable];
}
