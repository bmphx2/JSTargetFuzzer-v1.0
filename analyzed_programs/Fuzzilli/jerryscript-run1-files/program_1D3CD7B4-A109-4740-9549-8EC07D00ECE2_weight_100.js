const v0 = [16375,5752,9007199254740991,1,-1936169928,-14996,1161657807];
const v1 = [1235148533,-5,-65537,257];
const v2 = [-896926713,52220,512,268435456,4294967297,10,2147483649,-65536];
const v3 = /a?/vymsd;
const v4 = /(?:ab)|cde/ygmid;
const v5 = /[\p{Script_Extensions=Mongolian}&&\p{Number}]/um;
const v6 = [v0,v5,v0];
[v4,v6];
const v8 = [v3];
const v9 = [v2,v5,v5,v8,v8];
const v10 = [v4,v2,v9,v6];
v8.__proto__ = [v10,v10];
const o12 = {
    "e": v3,
};
function f13(a14, a15, a16) {
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
    return v9;
}
f13(v3, v9, v1);
