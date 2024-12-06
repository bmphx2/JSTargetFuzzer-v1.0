const v0 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v1 = [-5,-42608,1,-61785];
const v2 = [1694320064,1195474237,-22462];
const v3 = [v0,v2];
const v4 = [v3];
const v5 = [v3];
function f6(a7, a8, a9, a10) {
    const o28 = {
        __proto__: v1,
        "d": v4,
        toString(a12, a13, a14) {
            v5["some"](a12, v2);
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
            return a12;
        },
    };
    return o28;
}
const v29 = f6(v1, v3, v4, v1);
const v30 = f6(v5, v3, v1, v4);
f6(v4, v5, v3, v0);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a34;
}
const v36 = new F32(v5, v29);
const v37 = new F32(v4, v30);
new F32(v3, v30);
for (let v39 = 0; v39 < 81; v39++) {
    break;
    Object.defineProperty(v37, v30, { configurable: true, value: v36 });
    v5.length;
    break;
}
v1 instanceof f6;
