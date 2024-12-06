function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741825;
    this.a = 1073741825;
    this.b = 1073741825;
}
new F0();
const v4 = new F0();
new F0();
function f6() {
    return v4;
}
const v9 = new Uint8ClampedArray(10);
v9.g = "OsvPg";
const v14 = [-4.0,-828.5431934340852,-1000000.0,346.0653538265881];
([-314.51570379042937,2.65527411782465,-1e-15,-5.0,1000000000000.0,5.856735713146336e+307,0.4701091285172452]).lastIndexOf(v14, 987924842);
new Int16Array(71);
new BigUint64Array(16);
new Int32Array(6);
let v25 = Int16Array;
new v25(184);
const v29 = new Float64Array(65);
[v25] = v29;
const v37 = Symbol.iterator;
const o46 = {
    [v37]() {
        let v39 = 10;
        const o45 = {
            next() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "done": v43,
                    "value": v39,
                };
                return o44;
            },
        };
        return o45;
    },
};
