const v0 = [Infinity,2.0055942639701266e+307,-846430.9501461347,809.6353905008559,1000000.0];
const v1 = [1000.0,0.8198306281793991,-83432.00960571598];
[1.0,-567.9480123485507,-2.0,3.0,2.0,-6.046263882947315e+307];
function f3(a4, a5) {
    const o17 = {
        "e": a4,
        [a5]: a5,
        "g": a5,
        ...a4,
        set c(a7) {
            a7 & this;
            new Set();
        },
        set b(a12) {
            a12 = this;
            const v14 = [];
            Reflect.apply(v1.shift, a12, v14);
        },
    };
    return o17;
}
const v18 = f3(v1, v0);
const v20 = f3(f3(v18, v1), v0);
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v20;
}
new F28(65536, v18);
new F28(65537, v20);
new F28(65537, v20);
Object.defineProperty(v1, 3055565028, { writable: true, value: typeof -3 === "number" });
