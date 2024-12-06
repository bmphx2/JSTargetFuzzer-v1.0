const v2 = new Int8Array(1082);
try {
    const v4 = Symbol.iterator;
    const o23 = {
        [v4]() {
            function f7() {
                return v4;
            }
            Symbol(v2);
            let v9 = 10;
            const o22 = {
                next() {
                    v9--;
                    Object.defineProperty(this, v2, { configurable: true, value: v4 });
                    const v12 = [v2];
                    const v13 = [this,this,v12,v9,Symbol];
                    const v14 = [Int8Array,this,this,v12];
                    function f15() {
                        let {"d":v16,} = this;
                        v16 = Symbol;
                        delete v14[7];
                        Object.defineProperty(v13, 1073741824, { configurable: true, value: this });
                        return this;
                    }
                    const v20 = v9 == 0;
                    const o21 = {
                        "done": v20,
                        "value": v9,
                    };
                    return o21;
                },
            };
            return o22;
        },
    };
    for (let v24 = 0; v24 < 32; v24++) {
        o23["p" + v24] = v24;
    }
} finally {
    try { Int8Array(v2); } catch (e) {}
}
new BigUint64Array(3041);
new Int16Array(3);
new Int8Array(381);
new Uint16Array(56);
new Int8Array(3);
function f43() {
    return 56;
}
let v45 = 4294967296n;
v45 || (v45 | 1);
--v45;
