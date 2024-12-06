function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483647;
    this.c = 2147483647;
    this.g = 2147483647;
}
new F0();
new F0();
new F0();
new Uint16Array(3);
new Uint8ClampedArray(9);
let v14 = 58354n;
(v14 <<= 39655n) | 268435439n;
new Uint8Array(1024);
Array()["fill"]();
