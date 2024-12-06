function f0() {
}
class C1 {
    valueOf() {
        if (this) {
            this.valueOf = f0;
        } else {
            f0();
        }
        try {
            super.setTime(f0, this, this);
        } catch(e5) {
        }
        return this;
    }
}
new C1();
new C1();
new C1();
new Uint16Array(86);
new Uint32Array(62);
const v17 = new BigInt64Array(188);
v17.f = Uint32Array;
let v18 = 0;
while (v18 < 1) {
    [[86],Uint32Array,86];
    [62];
    v18++;
}
