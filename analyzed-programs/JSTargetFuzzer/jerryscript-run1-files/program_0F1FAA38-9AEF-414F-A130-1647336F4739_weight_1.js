let v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.g = a4;
}
const v6 = new F2(WeakMap, WeakMap);
const v7 = new F2(F2, F2);
const v8 = new F2(F2, v7);
new Array(2);
function f12() {
    return F2;
}
v6[1071332886] = v8;
if (536870888 !== 1071332886) {
    v7.b = 1071332886;
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
} else {
    -9188 >>> F2;
    const v32 = +v1;
    -9188 - v8;
    Math.acos(v32);
    v1--;
}
