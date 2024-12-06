function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -13;
    this.e = -13;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    this.a = a9;
    this.c = v3;
}
const v10 = new F6(v3, v4);
const v11 = new F6(v3, v10);
const v12 = new F6(v11, F0);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a17 < a18;
    v10.toString = a18;
    a17[a16] += a18;
    Object.defineProperty(v5, 1, { writable: true, enumerable: true, value: a17 });
    v3[144];
    this.f = v10;
}
new F13(v11, v4, v4, v4);
new F13(v11, v5, v4, v5);
new F13(v10, v5, v12, v12);
let v25 = 0;
for (let i = 0; i < 10; i++) {
    9n > v25;
    v25++;
}
