const v3 = ["bigint","number","number","caller","number"];
const v4 = ["bigint"];
[v4,"bigint","number",v4,"bigint"];
class C6 {
    static get d() {
        super.e = this;
        super.f *= v3;
        return v4;
    }
    set f(a9) {
        const o10 = {
        };
        new Proxy(this, o10);
    }
}
new C6();
new C6();
new C6();
const v17 = Symbol.iterator;
const o26 = {
    [v17]() {
        let v19 = 10;
        const o25 = {
            next() {
                v19--;
                const v23 = v19 == 0;
                const o24 = {
                    "done": v23,
                    "value": v19,
                };
                return o24;
            },
        };
        return o25;
    },
};
