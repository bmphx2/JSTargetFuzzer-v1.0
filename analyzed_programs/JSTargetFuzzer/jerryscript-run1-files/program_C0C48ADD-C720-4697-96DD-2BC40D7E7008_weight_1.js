class C3 {
    static get f() {
        let v8 = super.h;
        v8 /= this;
        return 2102566721;
    }
    static 7;
    static [-4294967297] = 2147483649;
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
const v15 = v9 + -9223372036854775807;
let v16;
try { v16 = C3(); } catch (e) {}
let v17;
try { v17 = new v16(v16, v10); } catch (e) {}
let v18;
try { v18 = v17(v17, -9223372036854775807, v15, -9223372036854775807); } catch (e) {}
v11[v18]?.f;
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};
