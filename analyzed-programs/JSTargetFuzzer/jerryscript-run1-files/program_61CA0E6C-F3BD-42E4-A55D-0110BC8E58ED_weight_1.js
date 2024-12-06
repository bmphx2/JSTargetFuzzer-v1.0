function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 32714;
    this.e = 32714;
    this.h = 32714;
    function f3() {
        return F0;
    }
    const v6 = new Array(32714);
    const v9 = new Uint32Array(2334);
    const v10 = `
        Uint32Array >= Uint32Array;
        let v12;
        try { v12 = v9.join(v10); } catch (e) {}
        v6[v12];
    `;
}
new F0();
new F0();
new F0();
new Set();
new Float32Array(5);
new Int32Array(8);
new Uint8ClampedArray(8);
-9007199254740991 - 1000;
