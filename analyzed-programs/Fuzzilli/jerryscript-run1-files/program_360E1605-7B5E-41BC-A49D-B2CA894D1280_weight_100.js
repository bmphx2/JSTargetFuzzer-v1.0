function f0() {
    let v1 = 14;
    const o10 = {
        __proto__: 6,
        "a": v1,
        valueOf(a5) {
            this[a5] = this;
            return a5;
        },
        ...6,
        [6](a7, a8) {
            v1 = a7;
            v1[536870888] = a7;
            return a8 << 6;
        },
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
let v14 = -14;
class C17 extends f0 {
    get a() {
        v14 = super.valueOf(159446271, this, this, v12, 159446271);
        return v11;
    }
    set b(a21) {
    }
}
const v28 = new C17();
new C17();
const v30 = new C17();
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v13;
    this.h = v12;
    this.f = v28;
}
new F31(v14, v12);
new F31(v30, v30);
new F31(v13, v11);
for (let i39 = 0; i39 < 1; i39++) {
    v14 = i39;
}
