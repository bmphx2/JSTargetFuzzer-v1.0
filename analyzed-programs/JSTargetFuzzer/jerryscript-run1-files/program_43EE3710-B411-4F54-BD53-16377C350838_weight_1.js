new Float64Array(256);
const v6 = Symbol.iterator;
const o15 = {
    [v6]() {
        let v8 = 10;
        const o14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const o13 = {
                    "done": v12,
                    "value": v8,
                };
                return o13;
            },
        };
        return o14;
    },
};
const v16 = new Int32Array(129);
const v19 = new Float32Array(7);
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 7;
}
const v28 = new F23(256, v19, F23);
const v29 = new F23(v16, v16, v28);
new F23(v29, v16, "-1024");
let v32;
try { v32 = F23(Float32Array, v29, "flatMap"); } catch (e) {}
try { v32(v28, v16, 129, "-1024"); } catch (e) {}
v19[257];
const v36 = new Map();
const v38 = new Int8Array(129);
v38.__proto__;
v36[Symbol.replace];
v38.length = 65;
try { v38.findIndex(Uint32Array); } catch (e) {}
const v47 = Symbol.toPrimitive;
const o52 = {
    [v47]() {
        return 129;
    },
};
