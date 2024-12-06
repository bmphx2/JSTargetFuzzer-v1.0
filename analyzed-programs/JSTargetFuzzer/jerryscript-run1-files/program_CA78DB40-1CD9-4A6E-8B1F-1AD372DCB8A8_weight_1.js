const v1 = new Map();
function f2(a3) {
    const o10 = {
        __proto__: v1,
        ...a3,
        "h": v1,
        ...v1,
        toString(a5) {
            const v7 = [a5,this];
            Reflect.apply(v1.set, this, v7);
            return v7;
        },
        [a3]: a3,
    };
    return o10;
}
f2(f2);
f2(Map);
f2(f2);
class C14 {
}
const v15 = new C14();
const v16 = [-1000.0,-Infinity,-3.0];
function* f17(a18, a19) {
    yield* v15;
    return f17;
}
const v20 = f17();
const v21 = [8,0,4294967297,-33048,6,1000,983207413];
try { v16["splice"](...v21, ...v20); } catch (e) {}
[867948953,257,-2147483647,0,-4294967295,-64352769,-43677];
const v28 = [10000,9];
[-4096,-62169,36748,-693228954,-31770,10000,-9223372036854775807,-2147483647,-4294967295];
const v37 = [3.0];
[-9.980181287646149];
[v37];
const v42 = new Int32Array(131);
const v45 = new BigInt64Array(2);
new Float64Array(3658);
v42 & true;
v28[536870887] = -12;
typeof "-128404002" === "boolean";
const t41 = "d";
t41[4] >>= 3.0;
Float64Array & -9.980181287646149;
v45[Symbol.replace];
let v64 = 18731;
const v67 = 3.0 % 4294967295;
const v68 = ++v64;
Math.imul(v64, v64);
v67 - 4294967295;
v68 >>> v67;
