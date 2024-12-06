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
Object.defineProperty(v7, "a", { configurable: true, enumerable: true, get: f1, set: f1 });
[F2];
[[f1,v7,10,37817],10];
const v14 = new F2(v7, f0);
let v17 = -2141471802;
[v17,v14,-287542917,F2];
[v7,f0];
[v6];
const o21 = {
};
let v22 = o21.constructor;
class C23 extends v22 {
}
Object.defineProperty(v14, 2406444430, { enumerable: true, value: v6 });
o21.h = f0;
v17 = 1421866293 || F2;
v22 = 268435439;
Math.sqrt(C23 - C23);
Math.abs(C23 ^ C23);
[-536870912,-25173,-1907898398];
[1073741823,2123301082,-31606,-1024,-2147483648,1295223696,-10438];
Object.defineProperty([-7,-9007199254740991,64,-1073741824,-36392,-1024,555235099], 3969, { configurable: true, get: f0 });
if (!268435439) {
    for (let v35 = 0; v35 < 5; v35++) {
        for (const v37 in C23()) {
        }
    }
    class C38 {
    }
}
