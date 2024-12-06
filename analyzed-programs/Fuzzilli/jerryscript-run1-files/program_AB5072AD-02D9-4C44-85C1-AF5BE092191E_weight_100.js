new Date();
function f5() {
    return Date;
}
let v14 = 1024;
const v16 = [6,-4294967297,24137,1073741824,-9,26291];
v14 = -1959355786 != 2.2418260009052314e+307 ? -1959355786 : 2.2418260009052314e+307;
const v20 = [Date,1];
Reflect.apply(v16.some, Date, v20);
const v23 = v16.keys();
v23[v23] **= -40022;
typeof (2.2418260009052314e+307 < 129) === "symbol";
const v29 = Symbol.iterator;
const o45 = {
    [v29]() {
        let v31 = 10;
        const o44 = {
            next() {
                v31--;
                const v35 = v31 == 0;
                const o43 = {
                    "done": v35,
                    "value": v31,
                    [v14](a37, a38, a39) {
                        return a37;
                    },
                };
                return o43;
            },
        };
        return o44;
    },
};
