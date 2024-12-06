let v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
let v6 = 128;
let v7 = Int32Array;
new v7(v6);
const v11 = new Float64Array(278);
const v14 = new Uint16Array(2);
v4 instanceof v7;
v5.c = v14;
const v17 = [v0,v3];
Reflect.apply(v0.filter, v5, v17);
({"b":v6,"e":v0,"g":v7,} = Reflect);
v4 > v11;
function f21() {
    return F1;
}
