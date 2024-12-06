function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v6 = new F3(-24333);
const v7 = new F3(-24333);
new F3(21430);
function f9(a10, a11) {
    const o12 = {
        "a": -24333,
        ...a10,
        __proto__: v6,
        "c": 21430,
        "h": v6,
        ...v7,
        "b": F3,
        ...21430,
        "d": a10,
        [-2]: a10,
    };
    return o12;
}
f9(21430, 1073741824);
f9(v6, 21430);
f9(1073741824, 1073741824);
{
}
