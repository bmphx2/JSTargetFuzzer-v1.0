function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741823;
}
new F0();
new F0();
new F0();
function f9() {
    return -124963612n;
}
const v12 = new Uint16Array(1096);
const v15 = new BigUint64Array(256);
new BigUint64Array(165);
let v19 = 0;
while (v19 < 5) {
    const v22 = 256 + 7124n;
    [v22,...v15,v22,v15,v19];
    v19++;
}
-124963612n << v12;
