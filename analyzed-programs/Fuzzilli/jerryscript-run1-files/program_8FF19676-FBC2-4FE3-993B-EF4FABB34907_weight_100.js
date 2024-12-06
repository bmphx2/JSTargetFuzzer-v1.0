function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483649;
    this.c = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,F0,v5];
const v7 = [v3,v5,v6];
const v8 = [v6];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
const v15 = new F9(v8, v7, v3, v5);
const v16 = new F9(v7, v8, v15, v3);
const v17 = new F9(v8, v8, v3, v4);
if (v17) {
    const v19 = Symbol.match;
    v5[v19] = v19;
} else {
    v17 ** v15;
}
v3.c = v16;
Object.defineProperty(v16, 5, { writable: true, value: v7 });
[[v15,v5]];
[v8];
