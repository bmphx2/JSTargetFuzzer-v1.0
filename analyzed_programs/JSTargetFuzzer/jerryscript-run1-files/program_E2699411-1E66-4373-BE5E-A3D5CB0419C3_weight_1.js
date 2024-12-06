let v0 = 5;
const v2 = new Float32Array(v0);
let v3 = 64;
const v5 = new Int16Array(v3);
const v8 = new Uint16Array(6);
function f9(a10, a11) {
    const o25 = {
        set e(a13) {
            typeof this === "string";
            v3 = a13;
            const v20 = v8[a13];
            a10 |= v20;
            v2[Symbol.iterator] = v20;
            this.g = Int16Array;
            try { this.defineProperties(); } catch (e) {}
            try { v5.subarray(a11, a13); } catch (e) {}
        },
        "b": v5,
        "g": v2,
        [v2]: v2,
        "a": 6,
        "e": f9,
        "f": a11,
        ...v5,
        "h": a10,
        "a": v8,
        [a10]: v3,
        "c": v2,
        "f": Float32Array,
        "e": v0,
        "h": v0,
    };
    return o25;
}
const v26 = f9(v0, v3);
f9(6, v0);
const v28 = f9(v3, 6);
const v29 = [-9223372036854775808,-8,9187];
try { v3(); } catch (e) {}
try { v29.findIndex(v3, v26); } catch (e) {}
v0 - v2;
v0 <<= 6;
v28.c;
new Map([v29]);
