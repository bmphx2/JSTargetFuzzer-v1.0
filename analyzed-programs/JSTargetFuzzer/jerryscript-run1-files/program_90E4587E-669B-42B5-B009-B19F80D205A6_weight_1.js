const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
new Int32Array(6);
Object.defineProperty(v4, "h", { enumerable: true, value: 184 });
new Uint32Array(256);
new Int16Array(2207);
new Int16Array(2837);
let v25 = Int16Array;
new v25(184);
const v29 = new Float64Array(65);
if (v0 === v25) {
} else {
    function f37() {
        return -2.0;
    }
}
[v25] = v29;
const v42 = Symbol.iterator;
const o54 = {
    [v42]() {
        let v44 = 10;
        const o53 = {
            next() {
                const v46 = v44--;
                try { this.n(v46); } catch (e) {}
                try {
                    super.concat();
                } catch(e49) {
                }
                const v51 = v44 == 0;
                const o52 = {
                    "done": v51,
                    "value": v44,
                };
                return o52;
            },
        };
        return v3;
    },
};
