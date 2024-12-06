function f3(a4, a5) {
    const o16 = {
        [f3]: a4,
        toString(a7) {
            try { this.localeCompare("undefined", a4); } catch (e) {}
            const v10 = Symbol.toPrimitive;
            const o15 = {
                [v10]() {
                    this[Symbol.toPrimitive];
                    return a7;
                },
            };
            return v10;
        },
    };
    return o16;
}
const v17 = f3("undefined", "object");
f3("undefined", "o");
f3("object", "undefined");
new Int16Array(129);
new Int8Array(v17);
new Float64Array(52);
function f38() {
    return 2n;
}
const t26 = 36639;
t26.toString = f38;
const t28 = f38();
const v46 = delete t28[f38];
function f47() {
    return f38;
}
const v53 = new Uint8Array(2);
let v55 = Float32Array;
const v56 = new v55(127);
new Int32Array(243, 243, v46);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v55 += v55;
let v71;
try { v71 = gc(v53); } catch (e) {}
const v73 = [v71];
const v75 = Reflect.apply(v56.sort, v56, v73);
try { v75.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
