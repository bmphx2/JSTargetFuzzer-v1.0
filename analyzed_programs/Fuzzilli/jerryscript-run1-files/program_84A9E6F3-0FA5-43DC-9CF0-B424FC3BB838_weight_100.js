class C3 {
    static o(a5) {
        try { this.n("536870889", "536870889"); } catch (e) {}
        return "536870889";
    }
    static get g() {
        return "536870889";
    }
    #d;
}
const v11 = new C3();
new C3();
const v13 = new C3();
[v11,v13];
["536870889","o",v13,"536870889",v11];
[0.0,v13,C3,0.0];
new Float32Array(3370);
const v22 = new Int16Array(318);
new BigInt64Array(235);
for (const v26 of v22) {
    for (let v27 = 0; v27 < 32; v27++) {
        v11["p" + v27] = v27;
    }
}
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
