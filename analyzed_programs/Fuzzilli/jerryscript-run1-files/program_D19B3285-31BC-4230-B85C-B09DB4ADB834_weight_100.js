let v2 = 4294967297;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
    this.c = a6;
}
const v7 = new F3(1024, v2);
const v8 = new F3(v2, 1024);
let v9 = new F3(v2, 1024);
const v10 = [22590,1073741825,8,4294967297,-44419,268435441,1036654025,1117051141];
const v11 = [127,257,13,-999701269,536870889];
const v12 = [2];
class C16 extends F3 {
    [v8] = v2;
    static 6 = v11;
    #f;
    static #n(a18, a19) {
        let v21 = new F3(1024, 1024);
        [v21,...v9] = v10;
        const v23 = [v21,a18];
        Reflect.apply(v10.find, this, v23);
        return 64;
    }
    static [v7] = v12;
}
let v26 = new C16();
new C16();
const v28 = new C16();
const v29 = v28 && v10;
let v31;
try { v31 = v29["construct"](v26, C16, v26, 4); } catch (e) {}
let v32;
try { v32 = new v31(v31, -4294967297, v8, v31, ...v31, v9); } catch (e) {}
({"d":v26,"e":v2,} = v32);
v12[6];
const o37 = {
};
new Proxy(v10, o37);
