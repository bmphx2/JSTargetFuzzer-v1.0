let v0 = 1000;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967295;
    this.e = a6;
    this.b = a6;
}
const v7 = new F3(v0, v0);
const v8 = new F3(v0, -4294967295);
const v9 = new F3(9223372036854775807, -4294967295);
[v8];
[[v9,v0,v9]];
const v16 = [-154.82745648602747,9.188065220488241,0.0,-673.3466407505532,-1.7976931348623157e+308,292.7890398556942,-262.38322714847845];
const v18 = v9.b;
let v19;
try { v19 = v18(); } catch (e) {}
const v20 = v18 * v19;
try { v7.toTimeString(-42833, v16, v20, v20, v20); } catch (e) {}
v0 >>= -42833;
const v22 = -Infinity;
const v24 = Math.expm1();
const v25 = Math.cos(v16);
try { v24(v25, ...v16, 7n, v25, 7n, ...v22); } catch (e) {}
