function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2541;
    this.c = 2541;
}
const v3 = new F0();
const v4 = new F0();
let v5 = v4[F0];
const v7 = Symbol.iterator;
let o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
const v17 = new F0();
new Int8Array(0);
const v23 = new Uint8ClampedArray(3438);
let v25 = Float64Array;
const v26 = new v25(9);
const v32 = new Float64Array(4096);
o16 = v32;
v5 = 3438;
v3[255] = v26;
const v35 = ("toString")[3438];
const t35 = "function";
t35.length = 0;
new Uint32Array(1935);
new Uint8ClampedArray(1531);
v23["toString"] = v17;
v25 = Float64Array;
const v40 = v3;
try { v35(1531, 4096, ..."undefined", 3438, 4096); } catch (e) {}
let v43 = -24105;
let v44 = 65536;
let v45 = 6.718856649787671;
const v46 = --v43;
Math.exp(4096);
Math.floor(v46);
v44++;
v45++;
~v44;
const v52 = [13,9,-12559,-8,-4294967297];
[3,-28987,536870889,1073741825,15];
let v54 = [65535,-1139741600];
new Uint8Array(26680);
new Float32Array(256);
new Float64Array(1024);
new Uint8Array(v52, 256, 1531);
let v66 = -41990;
const v68 = v54++;
let v69 = --v66;
const v70 = --v69;
v66--;
v70 * (v68 / v66);
