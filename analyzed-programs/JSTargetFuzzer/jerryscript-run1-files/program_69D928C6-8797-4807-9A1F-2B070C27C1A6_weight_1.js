function f0() {
    let v3 = "4294967296";
    const o14 = {
        o(a5, a6) {
            v3 = a6;
            let v7 = 0;
            while (v7 < 5) {
                for (let v10 = 0; v10 < 32; v10++) {
                    v3["p" + v10] = v10;
                }
                v7++;
            }
            return a5;
        },
    };
    return o14;
}
f0();
f0();
f0();
[9.66182245234982,4.445540239477868e+307,1e-15];
[-0.0,899334.4134735933,1000000.0,0.15735241026665114,-1000000000000.0,172.26491775473596,5.428741562831631e+307];
[103567.57028109045];
new Map();
new WeakSet();
function f28() {
}
function f29() {
    const o35 = {
        get g() {
            new f28();
            return f28;
        },
        "h": f28,
        ...f28,
        "g": f28,
        "a": f28,
        ...f28,
    };
    return o35;
}
f29();
const v37 = f29();
f29();
let v41 = Int32Array;
let v42 = new v41(4096);
new Uint32Array(129);
let v48 = new Int16Array(512);
[,v41,v48,v42] = v48;
v37.g += 4096;
const v50 = Symbol.iterator;
const o63 = {
    [v50]() {
        let v52 = 10;
        const o58 = {
            next() {
                v52--;
                const v56 = v52 == 0;
                const o57 = {
                    "done": v56,
                    "value": v52,
                };
                return o57;
            },
        };
        const v59 = [];
        let v60 = -10n;
        v60--;
        v59[-1];
        return o58;
    },
};
