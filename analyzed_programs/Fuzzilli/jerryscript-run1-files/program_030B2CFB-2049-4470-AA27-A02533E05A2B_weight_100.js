function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 2;
    this.c = 2;
}
new F0();
new F0();
new F0();
const v14 = new WeakSet();
new Int32Array(v14);
7 ** (7 >>> 4294967295);
Math.sqrt(-55150);
Math.acosh(4294967295);
