function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.b = a5;
}
new F3(-1555146457, 28847);
new F3(28847, 10);
new F3(10, -1555146457);
new Float32Array(199);
new Uint8ClampedArray(10);
new Float64Array(201);
function f19(a20, a21) {
    let v22 = 0;
    do {
        try { a21(); } catch (e) {}
        v22++;
    } while (v22 < 10)
}
new Promise(f19);
