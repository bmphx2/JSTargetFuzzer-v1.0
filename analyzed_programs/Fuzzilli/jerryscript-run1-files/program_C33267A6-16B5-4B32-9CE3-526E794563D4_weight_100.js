function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o3 = {
    };
    const v5 = new Proxy(F0, o3);
    for (let v6 = 0; v6 < 32; v6++) {
        o3["p" + v6] = v6;
    }
    this.f = -7;
    const o13 = {
        valueOf() {
            const o10 = {
            };
            new Proxy(v5, o10);
            return -7;
        },
    };
}
const v14 = new F0();
const v15 = new F0();
const v16 = new F0();
const o19 = {
    "a": F0,
    "b": 8,
};
const v20 = v14 % 8;
const v22 = [127,-880053579,-356273568,-5048,7,39488,268435456,-2147483649,-2];
[1737337799];
[-9223372036854775808];
v20 * -1e-15;
const v27 = -1e-15 | v20;
const v32 = Math.tanh(1886245736);
Math.clz32(-78578277);
Math.trunc(-78578277);
Math.tan(-1e-15);
Math.log2(1886245736);
const v37 = 8.901942594819592e+307 - F0;
[v22];
const v41 = [-1e-15,1.7976931348623157e+308,v16,-1e-15,v15];
new Int8Array(7);
const v47 = new Uint8Array(129);
const o52 = {
    valueOf() {
        let v50;
        try { v50 = v47.slice(v27, -78578277); } catch (e) {}
        try { v50(v32, v37, v50, -637285690); } catch (e) {}
        return 4096;
    },
};
new Float64Array(4096);
[v16,v41,-637285690,8,v41];
const v59 = [536870888,25884];
[-256,16,-4294967296,-1763678233,268435456,-268435456];
const v61 = [-1032287022,373483996,268435441];
const v64 = new Int8Array(127);
const v67 = new Float64Array(1346);
const v70 = new Int32Array(36);
v70[2n] = Float64Array;
v59[v64] = v67;
v64[2457] = 2n ^ -9n;
const v72 = ~v70;
try { v72(v61, 1346, v72, v72, v72); } catch (e) {}
v61[15];
