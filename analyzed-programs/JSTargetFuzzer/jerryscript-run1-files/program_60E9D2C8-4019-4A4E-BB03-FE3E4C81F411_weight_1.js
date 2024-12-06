const v2 = new Int32Array(4);
const v5 = new Float64Array(3004);
delete v5[3004];
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
try { v5.every(Symbol, o17); } catch (e) {}
Object.defineProperty(o17, "f", { value: v5 });
let v23 = 6;
const v24 = Int32Array && v23;
Math.atanh(v23);
const v26 = v23++;
const v27 = v26 >> v26;
v26 >> v24;
-v27;
Int32Array + v24;
o17.a = o17;
4 instanceof Float64Array;
const v35 = new Uint16Array(1484);
[v2,4,v35];
const v37 = [Int32Array,3004];
const v39 = [-4.0,-828.5431934340852,-1000000.0,346.0653538265881];
([-314.51570379042937,2.65527411782465,-1e-15,-5.0,1000000000000.0,5.856735713146336e+307,0.4701091285172452]).lastIndexOf(v39, 987924842);
const v42 = [Uint16Array,v5,v37,v35];
function F43(a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Float64Array;
    this.f = v2;
}
new F43(1484, F43, 1484);
new F43(1484, v42, 3004);
const v50 = new F43(4, v42, 4);
for (let v51 = 0; v51 < 5; v51++) {
    const v52 = `
        try { v39.filter(4, v50); } catch (e) {}
        [9,-4,-11,-36239,-463020288,65537,793101838,65537,-10];
        [3832,-34882,-1176708050,-128,-9007199254740991];
        [-45824,24055,-9007199254740991,64,9007199254740990];
        [2.220446049250313e-16,-3.1082093319477107,-4.0];
        [0.2594522839222021,-381.77947256305276,-1.5661000604621137e+308,Infinity,-9.40631804501847e+307,-978.0017580748801,-3.0,-1000000.0];
        [4.0,-232757.87704425422,3.968599666371934e+307,0.8459831449473875];
        let v61 = +-65537;
        v61++;
    `;
    eval(v52);
}
