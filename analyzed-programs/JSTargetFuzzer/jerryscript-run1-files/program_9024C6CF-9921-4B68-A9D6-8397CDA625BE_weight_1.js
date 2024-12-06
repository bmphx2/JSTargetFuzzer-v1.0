function f6(a7, a8, a9) {
    const o30 = {
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
            +558726556;
            ~(a8 / 558726556);
            -558726556;
        },
    };
    return o30;
}
const v32 = new WeakMap();
const v34 = [1000];
const v35 = v32.has;
const v36 = Reflect.apply(v35, v32, v34);
const v37 = f6(1000, -268435456, 1024);
const v39 = f6(-2, 1024, 1000, v35, f6(65537, 1024, -268435456));
let v41;
try { v41 = v37["fromEntries"](v39, -268435456, 1024, v36); } catch (e) {}
typeof v41;
1024 === "symbol";
[Infinity];
[-840694.6591365507];
[3.0,-2.0];
let v51 = -4294967297n;
v51 &= v51;
