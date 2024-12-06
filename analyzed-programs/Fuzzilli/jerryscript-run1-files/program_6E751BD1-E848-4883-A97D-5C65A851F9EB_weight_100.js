const v0 = [526.6910622464529,-0.0,-4.0,0.6914457320254356,1.0853616133815789e+307];
[-1.1774522255791807e+308,0.6433142469683454,0.9768351815690896,116.73426698805065,-Infinity,-1.0,247.12879940274843,NaN];
[0.0,0.3799564505994192];
const v5 = new Int8Array(7);
let v6 = 129;
const v8 = new Float64Array(v6);
const v11 = new BigUint64Array(197);
const o12 = {
    __proto__: v11,
    "g": v0,
    0: v6,
    "d": v8,
};
v6 = 7;
let v13;
try { v13 = Int8Array(...v5, ...v8, v11, Float64Array); } catch (e) {}
try { v13(o12, v13); } catch (e) {}
delete o12[1];
