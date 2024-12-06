const v5 = new Uint8Array(255);
try { v5(688, Uint8Array, 688, 688); } catch (e) {}
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
const v20 = new Uint16Array(688);
try { v20.subarray(2597); } catch (e) {}
new Int32Array(2198);
new BigUint64Array(255);
new Uint16Array(128);
const v32 = [1254864022,-59400];
class C34 {
}
const v35 = new C34();
class C36 extends C34 {
    constructor(a38, a39, a40) {
        super();
        const v42 = [a40];
        Reflect.apply(a38.copyWithin, a40, v42);
    }
}
new C36(v32, v35, Infinity);
new Int32Array(2597);
const v49 = Array();
const v51 = [Array];
Reflect.apply(v49.forEach, Array, v51);
