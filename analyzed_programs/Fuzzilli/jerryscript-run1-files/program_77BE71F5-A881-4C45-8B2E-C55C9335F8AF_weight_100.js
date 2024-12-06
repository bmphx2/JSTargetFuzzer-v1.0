const v0 = [-5.0,-3.281516331738156e+307,1000.0,-1.0671207293138156,360240.00849198154,0.951125682064339];
const v1 = [5.0,Infinity,0.0];
const v2 = [-853.463017627291,0.0,-1000000.0,-831621.3098065297,-4.390819755323088];
function f3(a4, a5) {
    const o15 = {
        [v2]: v1,
        "f": v2,
        o(a7, a8) {
            let v9;
            try { v9 = a5.includes(a4, a7); } catch (e) {}
            a7[30] = a7;
            return v9;
        },
        toString(a11) {
            class C13 extends a11.constructor {
                3925612264;
                static f = a4;
                #b;
            }
            new C13();
            return a5;
        },
    };
    return o15;
}
const v16 = f3(v2, v1);
const v17 = f3(v0, v0);
const v18 = f3(v1, v0);
const v22 = ["yOf",v1];
const v23 = [v1,v16,"n",v2];
const v24 = [v22,v18,v23,v16];
let v25;
try { v25 = v2.at(v16); } catch (e) {}
let v27;
try { v27 = v25["n"](v0, v24, "n", "n"); } catch (e) {}
let v28;
try { v28 = new v27("n", v27, v18, v17, v0); } catch (e) {}
const o29 = {
};
const v31 = new Proxy(v23, o29);
v31 ** v28;
