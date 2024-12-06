function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
new F3(65536, 58336);
new F3(65536, 58336);
const v9 = new F3(-2147483647, 65536);
const v12 = new Int16Array(6);
const v15 = new BigUint64Array(9);
const v17 = v15.__proto__;
try { v12.filter(v17, v9); } catch (e) {}
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
new Uint8Array(5);
const v33 = [];
try { v33.findIndex(); } catch (e) {}
