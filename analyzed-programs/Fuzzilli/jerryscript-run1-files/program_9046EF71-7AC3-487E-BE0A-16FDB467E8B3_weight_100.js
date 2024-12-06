function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740991;
    this.g = -9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,F0,v4,v5,F0];
const v7 = [v3,v4,v4,F0,v5];
const v8 = [v7,v3,v4];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.a = a12;
}
const v14 = new F9(v5, v7, v4);
new F9(v5, v8, v4);
new F9(v5, v6, v5);
const v17 = v7 !== F0;
v6.b = v8;
v17 % v17;
for (const v19 in v14) {
}
v8[Symbol.toPrimitive];
v7[227] = v6;
