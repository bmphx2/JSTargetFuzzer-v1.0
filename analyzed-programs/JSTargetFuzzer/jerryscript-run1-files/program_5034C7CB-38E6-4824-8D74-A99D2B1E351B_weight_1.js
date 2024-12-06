[-506074.32177990844,8.623695051446845e+306,-443.7553101996001,2.0];
[-2.104990809302013e+307,4.0,144260.81411729497,4.0,-5.0,-1.784086809481479e+308,-3.0,1000000000000.0];
const v2 = [5.0];
function f3() {
    return v2;
}
new Float32Array(57);
new Int32Array(7);
new Float32Array(2149);
new Int32Array(6);
let v20 = Int16Array;
new v20(184);
let v22 = undefined;
const o25 = {
    get c() {
        return v22 = arguments;
    },
};
const o26 = {
    ...o25,
};
const v29 = new Float64Array(65);
[v20] = v29;
const v37 = Symbol.iterator;
const o54 = {
    [v37]() {
        let v39 = 10;
        const o53 = {
            next() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "done": v43,
                    "value": v39,
                };
                return o44;
            },
            valueOf(a46, a47, a48, a49) {
                Object.defineProperty(a47, "e", { configurable: true, get: Symbol });
                for (let v50 = 0; v50 < 32; v50++) {
                    this["p" + v50] = v50;
                }
                return o26;
            },
        };
        return o53;
    },
};
