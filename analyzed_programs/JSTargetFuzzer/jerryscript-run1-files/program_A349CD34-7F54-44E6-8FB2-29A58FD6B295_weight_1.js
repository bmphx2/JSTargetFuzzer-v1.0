function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
let v3 = new F1();
new F1();
const v5 = new F1();
const v7 = [[F1,f0,f0,f0,v3],f0];
const v8 = [F1];
const v10 = new Map();
const v11 = [v10,v10,v8];
[v11];
const v13 = [v11,f0,v10,f0,Map];
let {"a":v17,"e":v18,"h":v19,...v20} = v3 = v5;
function f21(a22) {
    return v13;
}
class C23 extends f21 {
    static d = -38727;
    a = v7;
    static h = f21;
}
