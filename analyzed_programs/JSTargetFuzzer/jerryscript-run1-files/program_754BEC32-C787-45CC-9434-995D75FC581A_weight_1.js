function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2;
    const t3 = 2;
    t3.d = 2;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v3];
const v7 = [v6,F0,v6];
const v8 = [v4,v3,v7];
const v9 = [v8,v3];
[v5,v9,v9,v7,v4];
[v3,F0,v9,v6,v5];
let v14 = ++v3;
Math.tanh(v8);
let v16 = ++v14;
v16--;
