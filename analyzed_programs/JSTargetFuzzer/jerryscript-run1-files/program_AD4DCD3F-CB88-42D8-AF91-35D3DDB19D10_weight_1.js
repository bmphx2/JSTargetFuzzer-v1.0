class C3 {
    536870912;
    #valueOf(a5, a6) {
        const v8 = "-13242" ** (a5 ^ a6);
        [[v8,128,128],[a5,v8]];
        return 128;
    }
    h;
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17) {
    const o24 = {
        ...a17,
        valueOf(a19, a20) {
            return a20 = a19;
        },
        __proto__: "-13242",
        ["-13242"]: 128,
    };
    return o24;
}
f15(v14, v12);
f15(C3, v14);
const v27 = f15(v14, v13);
C3 !== f15 ? C3 : f15;
let v30;
try { v30 = C3.setMilliseconds("-13242"); } catch (e) {}
for (const v31 of "2006464201") {
    try { v31(v31, v31, f15, f15); } catch (e) {}
}
new f15(v27, v13);
try { new f15(128, C3, v12, ...f15, ..."2006464201", ...128); } catch (e) {}
let v37 = 37350;
(v37 / +v37) ** C3;
v30++;
+v30;
~0.8574492397064021;
v37--;
