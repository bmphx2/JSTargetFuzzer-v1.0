function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new WeakSet();
const v8 = [v5,v3,v3,v3,F0];
const v9 = [v8,F0,v7,F0];
[v9,v9,v9,v9];
v8.__proto__ = v3;
let v12;
try {
const t0 = -4;
v12 = t0(v4, v8);
} catch (e) {}
v12 *= v4;
v3 | v4;
("clz32").padStart("clz32");
("e").lastIndexOf("e");
