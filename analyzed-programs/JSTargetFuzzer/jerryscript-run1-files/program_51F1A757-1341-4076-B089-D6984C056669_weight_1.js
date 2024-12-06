function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 255;
}
new F0();
new F0();
new F0();
new Int32Array(8);
new Int16Array(2);
new Uint32Array(8);
for (let v18 = 0; v18 < 5; v18++) {
    Object.keys(v18);
}
