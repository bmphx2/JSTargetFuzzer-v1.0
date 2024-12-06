const v4 = new WeakSet();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -10;
    this.a = WeakSet;
    this.f = v4;
}
const v9 = new F5(-10, -10);
const v10 = new F5(863609253, -65535);
const v11 = new F5(-10, -65535);
[WeakSet,v11];
const v13 = [863609253];
const v14 = [WeakSet,F5];
function f15(a16, a17, a18) {
    const o26 = {
        "d": -10,
        "c": a18,
        n(a20, a21) {
            class C22 {
                e;
            }
            new C22();
            new C22();
            new C22();
            return v9;
        },
        ...v14,
        ...v4,
        [v4]: WeakSet,
    };
    return o26;
}
const v27 = f15(-65535, v13, v10);
const v28 = f15(v27, 863609253, v10);
const v29 = f15(F5, v28, v9);
f15(v27[2147483648], v29, v11);
let v32 = 0;
while (v32 < 7) {
    Object.defineProperty(v28, v29, { configurable: true, enumerable: true, get: f15, set: f15 });
    v4[Symbol.isConcatSpreadable];
    v32++;
}
