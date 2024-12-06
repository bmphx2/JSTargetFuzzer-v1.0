class C3 {
    constructor(a5) {
        let v6 = this.b;
        const v8 = Symbol.iterator;
        const o19 = {
            [v8]() {
                let v10 = 10;
                const o18 = {
                    next() {
                        v10--;
                        this[v10] = "object";
                        const v13 = ("object").repeat(this, C3, ..."object", this, this, v8);
                        v13.length %= v10;
                        Symbol(v13);
                        v6 = 1.7976931348623157e+308;
                        const v16 = v10 == 0;
                        const o17 = {
                            "done": v16,
                            "value": v10,
                        };
                        return o17;
                    },
                };
                return o18;
            },
        };
    }
}
const v20 = new C3(C3);
new C3(v20);
new C3(v20);
new WeakSet();
const v35 = [-16,4];
const v36 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v36[-9];
try { v35.slice(45103); } catch (e) {}
const o43 = {
    __proto__: v35,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    "e": 45103,
};
