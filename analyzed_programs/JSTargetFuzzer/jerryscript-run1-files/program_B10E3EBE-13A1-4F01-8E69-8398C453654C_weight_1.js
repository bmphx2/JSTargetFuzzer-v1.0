let v0 = 4.0;
class C3 {
    [9223372036854775807];
    valueOf(a5, a6) {
        if (v0 !== a6) {
            const v8 = super.e;
            try { new a5(v8); } catch (e) {}
        } else {
            v0 = a5;
        }
        return 9223372036854775807;
    }
}
new C3();
const v11 = new C3();
const v12 = new C3();
Object.defineProperty(C3, v12, { enumerable: true, value: v12 });
C3[4294967296] = 28255;
v11["valueOf"](1, v11, 12, C3, 1);
v11[2];
v0 = "valueOf";
