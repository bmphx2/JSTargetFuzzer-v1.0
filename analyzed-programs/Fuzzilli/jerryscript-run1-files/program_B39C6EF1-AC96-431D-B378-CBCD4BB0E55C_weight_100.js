function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 12332;
    this.b = 12332;
}
new F0();
new F0();
new F0();
Array["of"]("of", "of");
