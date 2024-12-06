function f6(a7, a8, a9, a10) {
    const o17 = {
        15: 3,
        "f": a8,
        "a": a7,
        "e": a10,
        0: 3,
        ...a8,
        "h": -4096,
        "g": 3,
        "c": -15970,
        "b": -15970,
        "c": a8,
        set g(a12) {
        },
        m(a14, a15, a16) {
            return a15;
        },
        "d": 5,
        __proto__: a8,
        [-1601223072]: -1601223072,
        ...a8,
    };
    return o17;
}
const v18 = f6(-1601223072, -15970, -1601223072, 3);
f6(-1601223072, -1601223072, -1601223072, 5);
f6(5, v18, 9007199254740992, -1601223072);
new WeakSet();
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
}
const v30 = new F26(F26, F26);
const v31 = new F26(F26, F26);
const v32 = delete v31[v30];
try { v30(...v32); } catch (e) {}
