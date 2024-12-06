let v8 = -283.2064842717956;
({"a":v8,} = 65535);
with (v8) {
    g[10000] %= g;
    let v16;
    try { v16 = g.getInt8(g, 51305n, v8, g, g); } catch (e) {}
    delete v16?.b;
}
