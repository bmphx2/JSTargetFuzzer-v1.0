function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
RangeError();
function F9() {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new Uint8Array();
    gc(v12);
}
new F9();
const v17 = new Date(3978);
const v20 = new Uint32Array(127);
with (v20) {
    length = 3978;
}
const v26 = new Int16Array(4, v20, v3);
function f27(a28, a29) {
    const o40 = {
        [Int16Array]: a28,
        [4]: a28,
        "f": Date,
        __proto__: v5,
        5: v20,
        "h": a29,
        [v26]: v3,
        "g": v4,
        ...v3,
        "g": a29,
        set c(a31) {
            a31 *= a31;
            +9223372036854775807;
            Math.min(v3);
            +v3;
            Math.ceil(3.6318104405206615);
            v3 * v3;
        },
    };
    return o40;
}
const v41 = f27(4, v3);
const v42 = f27(3978, v5);
const o44 = {
    "prototype": 129,
};
([]).pop;
const v47 = f27(4, v5);
const v51 = [65535n,0n,964329252n];
let v52 = [964329252n,964329252n,v51,v51];
const v53 = [v52,v52,v51,964329252n,0n];
const v54 = [65535n,v52];
[v53,0n];
const v56 = [v52];
const v61 = [v47,v4];
const v62 = [0n];
[v41,0n,v42,"o",v26];
v61 ** v17;
let v65;
try { v65 = v53.concat(v3); } catch (e) {}
Object.defineProperty(v52, v65, { configurable: true, get: f27, set: f27 });
const v66 = [256];
[-4294967297,515794916,32913,255];
[1073741824,-4,16,1,268435456,-65537,-268435456];
try { v61.concat(65535n, v66, v47, v26); } catch (e) {}
const t67 = "fdNr";
t67[0] = 65535n;
let v72;
try {
const t0 = "localeCompare";
v72 = new t0(v51, v56, v56, -5996);
} catch (e) {}
async function* f73(a74, a75, a76) {
    ({"length":a74,...v52} = a75);
    yield v51;
    await a74;
    for (const v79 in v62) {
        const o102 = {
            "maxByteLength": 127,
            get g() {
                new Int8Array(878, Float64Array, Int8Array);
                const t83 = [-479.8300930913641,-1.3747002587844368e+308,-1.7976931348623157e+308,-Infinity,-3.0,-4.0,1000000.0,83.44976893014473,-59.664190174647274];
                delete t83[7];
                const v89 = new BigUint64Array(129, Date, a74);
                const v91 = new Uint32Array();
                for (const v92 of v89) {
                    for (let v93 = 0; v93 < 32; v93++) {
                        v91["p" + v93] = v93;
                    }
                }
                new Int32Array(16);
                new Uint8ClampedArray(255);
                return 0n;
            },
        };
        for (const v103 of v26) {
        }
        const v108 = new Float64Array(12, o102);
        new Float32Array(v108);
    }
    yield "fdNr";
    return a74;
}
f73(-5996, v54, v72);
