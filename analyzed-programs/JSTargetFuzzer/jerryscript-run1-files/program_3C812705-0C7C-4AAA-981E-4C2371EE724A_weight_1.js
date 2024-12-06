function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this["e"] -= a5;
    let [v7,v8] = [];
    const v10 = Symbol.iterator;
    const o19 = {
        [v10]() {
            let v12 = 10;
            const o18 = {
                next() {
                    v12--;
                    const v16 = v12 == 0;
                    const o17 = {
                        "done": v16,
                        "value": v12,
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
}
new F3("e");
const v21 = new F3("string");
new F3("m");
const v29 = [-1024n,536870887,536870887n];
[F3,[v29,v29],"m","string"];
function f32() {
    ([2.220446049250313e-16,-3.6563428319836785e+307,-344.87920900417566,-1000.0])["keys"]();
}
new Uint8Array(0);
let v49 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v51 = new Int32Array(127);
v49 /= v51;
new WeakSet();
for (let v58 = 0; v58 < 81; v58++) {
    v21[1073741824] = 6n;
    const t39 = "2147483647";
    t39[268435440] -= v58;
}
new BigInt64Array(2);
([5]).reverse();
