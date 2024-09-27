# JSTargetFuzzer

JSTargetFuzzer-v1.0 is an approach utilizing a novel code-coverage fuzzing guidance using Fuzzilli as base software.

## Install

* System configuration:

- Intel i9 14900F (24 cores)
- Kali Linux 2024.1

## Targets

JSTargetFuzzer utilizes the JavaScript engine's instrumentation to target security-relevant address space and redirect the fuzzing campaings towards it.
Instrumentation examples are found in ./Targets/*

