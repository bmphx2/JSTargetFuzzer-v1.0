function f0() {
}
const v1 = [-13,-9223372036854775807,10,15,2,-48564,-536870912,4294967296];
const v2 = [457126934,268435439,-30247,127,-268435456,4294967297,64,0,227,-2147483648];
const v3 = [10,64,536870889,1515966085,256,-5151,10,255,104337171];
function f4() {
    return v1;
}
let v5 = "fround";
function f8(a9, a10) {
    const o14 = {
        "g": a10,
        __proto__: a9,
        129: v1,
        [v2]: f0,
        "f": a10,
        "d": v3,
        7: a10,
        get c() {
            v5 >>>= a10;
            this[this] = v3;
            Object.defineProperty("valueOf", "d", { writable: true, enumerable: true, get: f0, set: this });
            this[f4];
            function f13() {
                return a9;
            }
            return this;
        },
    };
    return o14;
}
f8("bigint", "valueOf");
f8("bigint", v5);
f8(v5, "valueOf");
const v22 = ([])[-1];
Object.defineProperty([0.3963332363617482], "h", { enumerable: true, get: v22 });
