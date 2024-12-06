const v0 = [348342784,-13,268435440,4096];
const v1 = [255,9];
const v2 = [10];
function f3() {
    return v1;
}
const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
function f15() {
    return v1;
}
const v20 = [-8,4294967295,148900462];
const v21 = RegExp.bind("2147483647", v20);
let v22;
try { v22 = v21(RegExp, 128, -9); } catch (e) {}
new RegExp(v22);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a26;
}
new F24(v21, v1);
new F24(v20, v20);
new F24(v0, v2);
try { v1.concat(v2, 356877.74332583696, v2, v1); } catch (e) {}
new Uint8Array(16);
new Float32Array(127);
new Uint32Array(128);
const v50 = [];
new Map([v50,v50], 16, 536870889);
