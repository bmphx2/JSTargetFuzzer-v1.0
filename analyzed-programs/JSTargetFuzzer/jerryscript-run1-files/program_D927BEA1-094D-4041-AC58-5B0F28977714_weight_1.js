const v0 = [-2147483647,-2,65535,-55217,4,9223372036854775807,10000,-1,-51090,255];
const v1 = [-4294967297,-61689,474569599];
const v2 = [4,913349680,1354323661,-65537,-1358055688,536870889,65536,9007199254740990];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v1;
    this.a = v1;
    this.g = v2;
}
new F3(v1);
const v7 = new F3(v0);
const v8 = new F3(v1);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -536870912;
    for (const v15 in this) {
        for (let i17 = 0; i17 < 2; i17++) {
            const o23 = {
            };
            new Proxy(v0, o23);
        }
        const v26 = v15.search();
        v26[v8] = v0;
        this[v15] = v8;
        try { v26(v15, v8, v15, NaN); } catch (e) {}
        v7 != this;
        new Int32Array(512);
        const o37 = {
        };
        new Proxy(Int32Array, o37);
        v0 > v26 ? v0 : v26;
        new Int32Array(216);
        new Int8Array(2020);
    }
}
new F12();
