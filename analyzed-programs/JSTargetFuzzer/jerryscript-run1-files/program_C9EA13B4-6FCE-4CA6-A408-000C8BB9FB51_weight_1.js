class C9 {
    static n(a11, a12) {
        const v15 = new Date(undefined);
        let v16 = [v15];
        --v16;
        super.d;
        function f19() {
            return "-4294967296";
        }
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = "-4294967296";
            this.a = "bigint";
            this.f = a23;
        }
        new F20("bigint", a12);
        new F20("-4294967296", a12);
        const v26 = new F20(a11, 9007199254740992);
        return v26;
    }
}
new C9();
new C9();
new C9();
const v31 = new Uint32Array(Uint32Array, Uint32Array);
let v32 = 1024;
const v34 = new BigInt64Array(v32);
let v35 = 1264;
let v36 = v35++;
[v36,v36,...v32] = v34;
try { v31.fill(v36); } catch (e) {}
