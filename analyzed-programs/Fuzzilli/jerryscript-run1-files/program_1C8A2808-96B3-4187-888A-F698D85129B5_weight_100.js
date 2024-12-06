let v2 = 4294967295;
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        return arguments;
    }
    const v8 = new F5();
    v8[8] = [v8];
}
new F3();
[1e-15];
[31.935512501716175,Infinity,791187.4625929475,0.758838453130221,-Infinity,-1.0];
[-1.7976931348623157e+308];
class C20 {
    o(a22, a23, a24, a25) {
        a24 = 257;
        const v27 = Symbol.toPrimitive;
        const o32 = {
            [v27]() {
                v2 = a24;
                Object.defineProperty("-1967937130", "length", { writable: true, configurable: true, value: 14 });
                return "name";
            },
        };
        return -21677;
    }
}
new C20();
new C20();
new C20();
const v38 = Array(76);
const v41 = new BigInt64Array(202);
v38.length = 1024;
let {"byteOffset":v43,...v44} = v41;
