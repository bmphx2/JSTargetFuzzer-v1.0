const v3 = new Int8Array(255);
const v6 = new Float32Array(6);
new Uint8Array(367);
function f13(a14, a15, a16) {
    const o17 = {
        [f13]: 16750,
        "d": v3,
        "e": a15,
        "h": a16,
        "a": 367,
    };
    return o17;
}
const v18 = f13();
const v19 = [1,1764682019,9223372036854775807,-27786,14,-128,1073741824,-61350];
const v20 = [65535,-49989,-48826,536870888,-4294967297,4294967295,-15,-268435456,-9007199254740990,-9007199254740992];
const v21 = [268435440,10,-95492655,268435441,-6,-15,65535,1473585106,2,8];
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a24;
    this.a = v20;
    this.c = a25;
}
new F22(367, v6);
new F22(6, f13);
new F22(536870912, v21);
const v29 = f13();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v18, v29, { configurable: true, enumerable: true, get: f13, set: f13 });
}
const v30 = v18.__proto__;
const v31 = [true,v19];
[v3,v30,2147483648];
[16750,Uint8Array,16750,v31,v20];
try { v19.shift(); } catch (e) {}
