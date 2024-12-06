function f3() {
    return -4;
}
let v4 = [f3,4];
const v6 = [-4,4,[v4,4,v4,-4,4],f3,v4];
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.b = 4;
    this.e = a10;
}
const v11 = new F7(4, f3);
const v12 = new F7(708286139, v6);
new F7(708286139, v11);
const v15 = new Set();
function f19() {
}
function f20() {
    const o26 = {
        get g() {
            new f19();
            return f19;
        },
        "h": f19,
        ...f19,
        "g": f19,
        "a": f19,
        ...f19,
    };
    return o26;
}
f20();
const v28 = f20();
const v29 = f20();
for (let v31 = 0; v31 < 32; v31++) {
    v28["p" + v31] = v31;
}
v4 in v15;
v29.g;
new Int16Array(512);
new Float32Array(512);
new Float32Array(127);
let v47 = Int32Array;
let v48 = new v47(4096);
let v50 = 0;
while (v50 < 0) {
    const v53 = [f3];
    const v54 = [v53,v53,v50,v12,v4];
    [-523.7583208762486,v54,129,v54,v54];
    v50++;
}
const v58 = new Uint32Array(129);
let v61 = new Int16Array(512);
[,v47,v61,v48] = v61;
v28.g += 4096;
const v63 = Symbol.iterator;
const o97 = {
    [v63]() {
        let v65 = 10;
        const o96 = {
            next() {
                const v67 = v65--;
                const v69 = v65 == 0;
                const o84 = {
                    valueOf(a71, a72, a73, a74) {
                        new Int32Array(2023);
                        new Int8Array(3);
                        new BigInt64Array(1);
                        return this;
                    },
                    "done": v69,
                    "value": v65,
                };
                o84 < v58;
                const v86 = [239.60046828487998,v67];
                const v87 = [v86,v4,v4];
                [Uint32Array,v67,v87,v87];
                let v91 = 0.9502369697120533;
                v91--;
                Math.tan(v86);
                v4--;
                v91 && v4;
                return o84;
            },
        };
        return o96;
    },
};
