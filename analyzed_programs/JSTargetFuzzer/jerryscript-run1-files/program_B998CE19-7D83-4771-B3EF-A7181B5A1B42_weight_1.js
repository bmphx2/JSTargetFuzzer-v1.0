function f0() {
    const v1 = -Infinity;
    const o15 = {
        "b": 0,
        "f": v1,
        "g": 0,
        __proto__: v1,
        set e(a5) {
            this[100] = 0;
            typeof 65535 === "number";
            let v12 = +v1;
            -v12;
            --v12;
        },
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
const v19 = [1.0,-3.0,4.184454712870668];
[0.11143168553964378];
const v21 = [-216878.42470549315,943.6147790908897,-1.8080363831164128,-2.220446049250313e-16,0.0,-4.834166278908738,3.0,-3.0];
class C25 {
    static [v18] = v17;
    static {
        function F27(a29, a30) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a29;
        }
        new F27(v19, v19);
        const v32 = new F27(this, this);
        new F27(v32, v21);
    }
    static e = f0;
    static [v16];
}
const v34 = new C25();
const v35 = new C25();
const v36 = new C25();
let v37;
try { v37 = v36.some(v34, -58880248, v36); } catch (e) {}
for (let i39 = 0; i39 < 10; i39++) {
    new f0();
    try { v37(v35, v34); } catch (e) {}
}
