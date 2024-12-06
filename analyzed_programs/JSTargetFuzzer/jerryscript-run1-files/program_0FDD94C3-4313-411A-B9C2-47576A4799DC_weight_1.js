function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967295;
    this.c = -4294967295;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const v7 = [[v4]];
[v3,v7,v7,F0];
new Int16Array(16);
new Int8Array(1023);
new Uint8Array(1024);
let v21 = 9223372036854775807n;
v21 -= v21;
