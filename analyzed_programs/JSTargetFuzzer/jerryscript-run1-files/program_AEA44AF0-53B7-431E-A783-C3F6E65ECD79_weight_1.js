const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.c = a4;
}
const v6 = new F2(F2, F2);
class C7 {
    static [WeakMap];
}
new C7();
new C7();
new C7();
new F2(v1, WeakMap);
new F2(WeakMap, v6);
[1,-25654,-65535,-15];
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
[64,936707047,258519798,23037,-1073741824];
[6211,2,-4,4294967296,-256,19556,536870889];
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Int32Array(12);
new Uint8ClampedArray(1024);
new Int32Array(13);
new Uint16Array(v36);
for (let i58 = 0; i58 < 2; i58++) {
    const v64 = new Function("object");
    v64.name;
}
Function();
