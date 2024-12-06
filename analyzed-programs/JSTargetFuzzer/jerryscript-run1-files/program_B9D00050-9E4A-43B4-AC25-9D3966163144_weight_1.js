class C3 {
    static set g(a5) {
        try { ("function").codePointAt(a5); } catch (e) {}
    }
    set b(a11) {
        this[Symbol.e] = -268435456;
        for (let v14 = 0; v14 < 32; v14++) {
            const t7 = "function";
            t7["p" + v14] = v14;
        }
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3(C3);
function f20(a21, a22) {
    const o34 = {
        ...v18,
        "e": a21,
        "b": -268435456,
        "c": v18,
        "g": "function",
        get d() {
            try {
                super.setFloat32(a22, C3, this, a21, this);
            } catch(e25) {
            }
            let [v27,,...v28] = a21;
            [["function",a22,v27,WeakRef],WeakRef,f20,v28];
            [this];
            try {
                super.padStart();
            } catch(e33) {
            }
            return v18;
        },
    };
    return o34;
}
const v35 = f20(v18, v19);
const v36 = f20(v17, v35);
const v37 = f20(v35, v35);
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v36;
}
new F38(v37, C3, v37, v35);
new F38("AHCB", v36, v35, v35);
new F38("AHCB", v17, v37, v36);
const v48 = Array();
const v50 = [Array];
Reflect.apply(v48.forEach, Array, v50);
