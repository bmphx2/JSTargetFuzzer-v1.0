const v1 = new Date();
const v3 = new WeakMap();
const v4 = [v3];
const v5 = [v4];
const v6 = [v1,v3,v3,v5];
function f7(a8, a9, a10, a11) {
    const o26 = {
        set e(a13) {
            const v14 = typeof Date;
            const v16 = v14 === "object";
            function F17(a19, a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a8;
            }
            const v23 = new F17(F17, a9, a8, v14);
            const v24 = new F17(v16, v4, v16, v23);
            new F17(a8, a8, v24, v6);
        },
    };
    return o26;
}
f7(v4, WeakMap, v6, f7);
f7(v6, v4, v6, Date);
f7(v5, f7, v5, v1);
const v32 = new Uint32Array(181);
let v34 = Uint32Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i49 = 0; 2 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
