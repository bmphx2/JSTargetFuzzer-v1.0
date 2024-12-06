function f0() {
}
function f1() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f1;
    this.h = f0;
    this.c = f0;
}
const v6 = new F2(f1, f1);
const v7 = new F2(F2, F2);
const v8 = new F2(v7, f0);
[-2141471802,v8,-287542917,F2];
[v7,f0];
[v6];
const o15 = {
};
class C17 extends o15.constructor {
}
Object.defineProperty(v8, 2406444430, { enumerable: true, value: v6 });
[-536870912,-25173,-1907898398];
[1073741823,2123301082,-31606,-1024,-2147483648,1295223696,-10438];
Object.defineProperty([-7,-9007199254740991,64,-1073741824,-36392,-1024,555235099], 3969, { configurable: true, get: f0 });
if (!268435439) {
    for (let v22 = 0; v22 < 5; v22++) {
        for (const v24 in C17()) {
        }
    }
    class C25 {
    }
}
