function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -4096;
    this.e = -4096;
    this.c = -4096;
}
function f3(a4, a5, a6) {
    arguments[1] = arguments.callee;
    return a4;
}
f3();
const v10 = new F0();
new F0();
const v12 = new f3();
const v14 = new Map();
const v15 = [v14,v12];
const v16 = [Map,v12,v10,v12,v15];
[v16,v16,v15,v15,v10];
[7,-2147293271,-55898,256,-874433804,-488133562,228376096];
const v19 = [1254864022,-59400];
class C21 {
}
const v22 = new C21();
class C23 extends C21 {
    constructor(a25, a26, a27) {
        super();
        const v29 = [a27];
        Reflect.apply(a25.copyWithin, a27, v29);
    }
}
new C23(v19, v22, Infinity);
[536870888,-12663,2147483649,53176];
[52969,35083,-1,65535,4294967295,2147483647,19977,-12,-58107];
Symbol.for(F0);
Symbol.keyFor(Symbol.iterator);
