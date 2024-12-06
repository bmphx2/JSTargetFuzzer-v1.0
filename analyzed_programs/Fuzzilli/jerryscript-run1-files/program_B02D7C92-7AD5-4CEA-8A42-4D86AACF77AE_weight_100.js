const v8 = new Uint8ClampedArray(88);
v8.length = 7;
new Int8Array(5);
new Float64Array(5);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 12332;
    this.b = 12332;
}
new F19();
new F19();
new F19();
Array["of"]("of", "of");
