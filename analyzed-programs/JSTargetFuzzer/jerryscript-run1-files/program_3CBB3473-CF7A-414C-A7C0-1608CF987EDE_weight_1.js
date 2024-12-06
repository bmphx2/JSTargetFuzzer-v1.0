function f0() {
    const o8 = {
        205: -65537,
        "g": -2.2250738585072014e-308,
        __proto__: -2.2250738585072014e-308,
        get c() {
            this.__proto__ = this;
            [-2.0,1e-15];
            const v6 = [1000000.0,-1000000000000.0,-2.220446049250313e-16];
            const v7 = [-0.7203399604489888,-Infinity,306.2180252907224,-4.0,Infinity,994.3707871922788,-0.0];
            v6[v7] = this;
            v7[v6] = v7;
            return this;
        },
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
let v11 = f0();
function f15() {
    return v10;
}
const v25 = [65535n,0n,964329252n];
let v26 = [964329252n,964329252n,v25,v25];
const v27 = [v26,v26,v25,964329252n,0n];
const v28 = [65535n,v26];
[v27,0n];
const v30 = [0n];
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
const t47 = "hasInstance";
t47[0] = 65535n;
try {
const t0 = "localeCompare";
new t0(v25, v30, v30, 58270);
} catch (e) {}
async function* f49(a50, a51, a52) {
    ({"length":a50,...v26} = a51);
    yield v25;
    await a50;
    ("hasInstance")["toLowerCase"]();
    a50 = v9;
    v11 |= v10;
    const v58 = Symbol.iterator;
    v10[v58] = v58;
    yield "fdNr";
    return a50;
}
f49(58270, v28, 0n);
