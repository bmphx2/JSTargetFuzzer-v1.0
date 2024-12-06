let v2 = "kcQL5";
class C3 {
    get e() {
        v2 = "Y";
        for (const v5 in v2) {
            const v8 = Symbol.iterator;
            const o17 = {
                [v8]() {
                    let v10 = 10;
                    const o16 = {
                        next() {
                            v10--;
                            const v14 = v10 == 0;
                            const o15 = {
                                "done": v14,
                                "value": v10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
        }
        return "Y";
    }
}
const v18 = new C3();
new C3();
const v20 = new C3();
let v22;
try { v22 = v18(4294967295); } catch (e) {}
v20[4294967295] = v20;
const o23 = {
};
new Proxy(v20, o23);
let v34;
try { v34 = v22(C3); } catch (e) {}
try { new v34(...v2, ...v34, ...-3.0, 4294967295); } catch (e) {}
new Float32Array(3701);
const v44 = new Int32Array();
const v45 = new Int32Array();
function F46(a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v45;
    this.e = v44;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o56 = {
    set a(a55) {
    },
};
for (let v57 = 0; v57 < 5; v57++) {
    o56.a;
}
const v59 = [-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v61 = [13,9,-12559,-8,-4294967297];
let v62 = [65535,-1139741600];
new Uint8Array(v61);
let v65 = -41990;
const v66 = v62++;
let v67 = --v65;
function f68() {
    ++v2;
    v22[268435440] = F46;
    v59.length = 4;
    typeof o56 === "string";
    return f68;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v67 * (v66 << v65);
