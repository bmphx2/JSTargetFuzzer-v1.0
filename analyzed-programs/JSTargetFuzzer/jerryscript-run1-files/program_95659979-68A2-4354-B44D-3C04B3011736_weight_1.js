function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -55063;
}
const v3 = new F0();
new F0();
new F0();
new Int16Array(2);
new Int8Array(161);
new Float32Array(7);
let v21 = 0;
while (v21 < 5) {
    Object.defineProperty(v3, 220, { writable: true, enumerable: true, value: -256 });
    v21++;
}
