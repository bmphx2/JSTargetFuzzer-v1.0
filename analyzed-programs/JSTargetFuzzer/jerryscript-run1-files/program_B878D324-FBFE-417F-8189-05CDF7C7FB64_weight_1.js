function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const v5 = new F2();
const v6 = new F2();
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v5;
    this.e = v4;
}
const v10 = new F7();
const v11 = new F7(v10);
new Uint8ClampedArray();
const v15 = new BigUint64Array(v11, BigUint64Array);
function f17() {
    return 2n;
}
Object.defineProperty(v6, "a", { configurable: true, get: f17 });
let v20;
try { v20 = v10.setSeconds(); } catch (e) {}
const v21 = new f17();
delete v15[v21];
const t22 = 16;
t22.toString = f17;
const t25 = f17();
const v24 = delete t25[f17];
function f25() {
    return v24;
}
const v28 = new Uint8Array(v4, v20);
Object.defineProperty(v11, 5n, { configurable: true, enumerable: true, value: 9007199254740992 });
let v29 = Float32Array;
const v30 = new v29();
Number();
new BigInt64Array();
new Uint32Array();
v29 += v29;
let v38;
try { v38 = gc(v28); } catch (e) {}
const v40 = [v38];
Reflect.apply(v30.sort, v30);
v40.flat();
function f46() {
    return true;
}
[-14327,-145008936];
const v54 = [true];
[v54,v54];
new Date();
[1000000000.0,3.0,0.48333869039314203,-3.0,-42.27685596507831,1.0,-2.220446049250313e-16,2.2250738585072014e-308];
[-2.2250738585072014e-308,4.6851711673422e+307,0.8409694899017219,0.03020226738329934,938.2490746289682,4.0,607098.3930723551,-0.5930668077125656];
[1e-15,9.323130580524804,-2.0,-1.0];
new Float64Array(10);
const v66 = new Int16Array(14);
const v69 = new Int16Array(257);
257 in v69;
const v71 = v66.buffer;
const o72 = {
    "c": v71,
    "h": Int16Array,
    ...v54,
};
Date();
