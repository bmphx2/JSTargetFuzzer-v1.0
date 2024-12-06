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
v4 in v15;
v29.g;
new Int16Array(512);
new Float32Array(512);
new Float32Array(127);
let v43 = Int32Array;
let v44 = new v43(4096);
let v46 = 0;
while (v46 < 0) {
    const v49 = [f3];
    const v50 = [v49,v49,v46,v12,v4];
    [-523.7583208762486,v50,129,v50,v50];
    v46++;
}
const v54 = new Uint32Array(129);
let v57 = new Int16Array(512);
[,v43,v57,v44] = v57;
v28.g += 4096;
const v59 = Symbol.iterator;
const o93 = {
    [v59]() {
        let v61 = 10;
        const o92 = {
            next() {
                const v63 = v61--;
                const v65 = v61 == 0;
                const o80 = {
                    valueOf(a67, a68, a69, a70) {
                        new Int32Array(2023);
                        new Int8Array(3);
                        new BigInt64Array(1);
                        return this;
                    },
                    "done": v65,
                    "value": v61,
                };
                o80 < v54;
                const v82 = [239.60046828487998,v63];
                const v83 = [v82,v4,v4];
                [Uint32Array,v63,v83,v83];
                let v87 = 0.9502369697120533;
                v87--;
                Math.tan(v82);
                v4--;
                v87 && v4;
                return o80;
            },
        };
        return o92;
    },
};
