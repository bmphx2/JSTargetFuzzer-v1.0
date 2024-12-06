function f0() {
    let v1 = "e";
    const o18 = {
        "g": v1,
        "d": 10,
        [10]: -65535,
        valueOf(a5, a6) {
            const v8 = Symbol.iterator;
            const o17 = {
                [v8]() {
                    const o16 = {
                        next() {
                            v1--;
                            const v14 = 10 == 0;
                            const o15 = {
                                "done": v14,
                                "value": 10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
            return this;
        },
    };
    return o18;
}
const v19 = f0();
const v20 = f0();
const v21 = f0();
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v21;
}
const v25 = new F22(v20);
new F22(v19);
const v27 = new F22(v20);
[v27,v27];
[v21];
[v25];
[-1073741824,-1073741824,-65535,-29787,37573,1000,7,-9,-65535,14];
[2147483647,9007199254740990];
[65536,8,4294967295,-9007199254740992,-12625,-10,2147483649,707960957,6];
new Uint8ClampedArray(("3").matchAll("-15"));
