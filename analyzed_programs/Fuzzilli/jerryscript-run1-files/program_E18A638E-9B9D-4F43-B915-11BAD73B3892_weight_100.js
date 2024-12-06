function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1;
    this.b = 1;
}
const v3 = new F0();
new F0(F0, v3, v3);
new F0();
Array["of"]("of", "of", F0, 1073741824, 725818.7591175553);
