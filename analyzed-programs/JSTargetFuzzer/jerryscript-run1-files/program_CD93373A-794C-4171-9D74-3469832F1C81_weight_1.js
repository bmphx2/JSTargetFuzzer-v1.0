function f0() {
    let v1 = -1.7976931348623157e+308;
    const o6 = {
        ...1000000.0,
        __proto__: v1,
        get a() {
            v1 *= v1;
            v1 >>>= v1;
            this.f = v1;
            let v5;
            try { v5 = v1(9.559262113224373e+307, 1000000.0, v1, this, this); } catch (e) {}
            return v5;
        },
        [9.559262113224373e+307]: 1000000.0,
        [v1]: v1,
        "g": 9.559262113224373e+307,
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
Math.imul(v8, -273.6039828462773);
4294967295 ** v8;
Math.cos(v8);
f0();
new f0();
v7[1024] = -273.6039828462773;
const v28 = [-2147483647,"59989"];
const v30 = [["59989",v28,-2147483647,"-65537",v28],0,true];
const v31 = [-2.220446049250313e-16,-436.0343166790291];
const v32 = `
    let {"a":v35,"e":v36,} = v7;
    try { v36.toString(740483192, -65537, v36); } catch (e) {}
    try { v30["toString"](v32, ...v36, 6.351695460504373e+307, ..."toString"); } catch (e) {}
    v31 | v31;
    const v46 = v30[Symbol.unscopables];
    try { v46(0, -4.0); } catch (e) {}
    Math.E;
    let v49 = +-65537;
    v49++;
    Math.exp(Math);
`;
eval(v32);
