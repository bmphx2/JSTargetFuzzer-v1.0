const v1 = new Map();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a7;
    this.d = a7;
}
new F5("string", "string");
const v10 = v1.size;
try { v10("string", "Gd"); } catch (e) {}
new F5("11", "Gd");
new F5("string", "11");
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
    this.b = a28;
}
new F26(-1555146457, 28847);
new F26(28847, 10);
new F26(10, -1555146457);
new Float32Array(199);
new Uint8ClampedArray(10);
new Float64Array(201);
function f42(a43, a44) {
    let v45 = 0;
    do {
        try { a44(); } catch (e) {}
        v45++;
    } while (v45 < 10)
}
new Promise(f42);
