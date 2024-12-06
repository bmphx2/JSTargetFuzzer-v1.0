const v0 = [-0.935027403281234,-1000000000.0,1000000000.0,-1e-15,-2.0];
const v1 = [-1000.0,-2.2250738585072014e-308,-2.220446049250313e-16,-1000000000.0,780719.3208712109,Infinity];
const v2 = [9.047032161949319e+306,-1000000.0,1000000.0];
const v3 = [v1,v1,v2,v2];
const v4 = [v3,v3,v0,v0,v0];
const v5 = [v2,v0,v4,v4,v1];
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
const v23 = [3,-442752321,-1397339341,4294967296];
v23.__proto__ = v1;
v5.length;
try { v23.flatMap(RegExp); } catch (e) {}
const o30 = {
    __proto__: v2,
    ...v5,
    "h": -43572n,
};
