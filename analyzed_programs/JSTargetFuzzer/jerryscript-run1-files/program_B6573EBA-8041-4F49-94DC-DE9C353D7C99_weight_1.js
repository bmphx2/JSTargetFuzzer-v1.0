function f6(a7, a8, a9) {
    const o38 = {
        "a": a9,
        ...a7,
        set d(a11) {
            const o12 = {
            };
            const v14 = new Proxy(a11, o12);
            ({"b":f6,} = o12);
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a18;
                this.a = o12;
            }
            const v20 = new F15(a7, -268435456, v14);
            new F15(v20, -268435456, -268435456);
            new F15(o12, -2, a11);
            let v25 = 65536;
            +558726556;
            ~(a8 / 558726556);
            Math.log1p(v25);
            Math.cosh(-38054);
            const v33 = v25++;
            v25 << v25;
            v33 * v33;
            -38054 * v25;
            -558726556;
        },
    };
    return o38;
}
f6.valueOf = f6;
let v40 = 1488686420;
(-268435456) ** v40;
--v40;
+v40;
Math.log10(-268435456);
const v46 = new WeakMap();
const v48 = [1000];
const v49 = v46.has;
const v50 = Reflect.apply(v49, v46, v48);
const v51 = f6(1000, -268435456, 1024);
const v53 = f6(-2, 1024, 1000, v49, f6(65537, 1024, -268435456));
let v55;
try { v55 = v51["fromEntries"](v53, -268435456, 1024, v50); } catch (e) {}
typeof v55;
1024 === "symbol";
[Infinity];
[-840694.6591365507];
[3.0,-2.0];
let v65 = -4294967297n;
v65 &= v65;
