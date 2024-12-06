class C7 {
    static {
        const v10 = Symbol.iterator;
        const o19 = {
            [v10]() {
                let v12 = 10;
                const o18 = {
                    next() {
                        v12--;
                        const v16 = v12 == 0;
                        const o17 = {
                            "done": v16,
                            "value": v12,
                        };
                        return o17;
                    },
                };
                return o18;
            },
        };
    }
}
new C7();
const v21 = new C7();
const v22 = new C7();
v21.h = "8";
["X","2147483649",v21,v22,"X"];
const v24 = [,];
[v22,v24,v22,v24];
new BigInt64Array(129);
new Int8Array(971);
new Int8Array(9);
