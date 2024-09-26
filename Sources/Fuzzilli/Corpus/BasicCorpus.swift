// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation

extension Array where Element == Double {
    func binarySearch(_ value: Double) -> Int {
        var low = 0
        var high = count - 1

        while low <= high {
            let mid = (low + high) / 2
            if self[mid] < value {
                low = mid + 1
            } else if self[mid] > value {
                high = mid - 1
            } else {
                return mid
            }
        }
        return low
    }
}

/// Corpus for mutation-based fuzzing.
///
/// The corpus contains FuzzIL programs that can be used as input for mutations.
/// Any newly found interesting program is added to the corpus.
/// Programs are evicted from the copus for two reasons:
///
///  - if the corpus grows too large (larger than maxCorpusSize), in which
///    case the oldest programs are removed.
///  - if a program has been mutated often enough (at least
///    minMutationsPerSample times).
///
/// However, once reached, the corpus will never shrink below minCorpusSize again.
/// Further, once initialized, the corpus is guaranteed to always contain at least one program.
public class BasicCorpus: ComponentBase, Collection, Corpus {
    /// The minimum number of samples that should be kept in the corpus.
    private let minSize: Int

    /// The minimum number of times that a sample from the corpus was used
    /// for mutation before it can be discarded from the active set.
    private let minMutationsPerSample: Int

    /// The current set of interesting programs used for mutations.
    private var programs: RingBuffer<Program>
    private var ages: RingBuffer<Int>

    /// Counts the total number of entries in the corpus.
    private var totalEntryCounter = 0


    public init(minSize: Int, maxSize: Int, minMutationsPerSample: Int) {
        // The corpus must never be empty. Other components, such as the ProgramBuilder, rely on this
        assert(minSize >= 1)
        assert(maxSize >= minSize)

        self.minSize = minSize
        self.minMutationsPerSample = minMutationsPerSample

        self.programs = RingBuffer(maxSize: maxSize)
        self.ages = RingBuffer(maxSize: maxSize)

        super.init(name: "Corpus")
    }

    override func initialize() {
        // Schedule a timer to perform cleanup regularly, but only if we're not running as static corpus.
        if !fuzzer.config.staticCorpus {
            fuzzer.timers.scheduleTask(every: 30 * Minutes, cleanup)
        }
    }

    public var size: Int {
        return programs.count
    }

    public var isEmpty: Bool {
        return size == 0
    }

    public var supportsFastStateSynchronization: Bool {
        return true
    }

    public func add(_ program: Program, _ aspects: ProgramAspects) {
        addInternal(program)
    }

    public func addInternal(_ program: Program) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: totalEntryCounter)
            programs.append(program)
            ages.append(0)
            totalEntryCounter += 1
        }
    }

    //JSTargetFuzzer
    public func randomElementForMutating() -> Program {
    // Precompute the cumulative weights
    let cumulativeWeights = programs.reduce(into: [Double]()) { (result, program) in
        let newWeight = (result.last ?? 0) + program.weight
        result.append(newWeight)
    }
    
    // Generate a random number between 0 and the total weight
    let totalWeight = cumulativeWeights.last!
    let randomNumber = Double.random(in: 0..<totalWeight)

    // Find the index using binary search
    let index = cumulativeWeights.binarySearch(randomNumber)
    
    // Get the program at the found index
    let program = programs[index]
    
    // Increment age if the weight is 1.0
    //if program.weight == 1.0 {
    ages[index] += 1
    //}

    return program
}




    public func randomElementForSplicing() -> Program {
            let idx = Int.random(in: 0..<programs.count)
            let program = programs[idx]
            assert(!program.isEmpty)
            return program
    }


        public func randomElementForSplicing_test() -> Program {
        // Mensagem inicial
        //var logDetails = "[JST] Splicing based on weight!\n"

        // Calcula o peso total dos programas
        let totalWeight = programs.reduce(0.0) { $0 + $1.weight }
        //logDetails += "[JST] Total weight of all programs for splicing: \(totalWeight)\n"
        
        // Gera um número aleatório entre 0 e o peso total
        let randomNumber = Double.random(in: 0..<totalWeight)
        //logDetails += "[JST] Random number generated for splicing: \(randomNumber)\n"

        // Inicializa o peso cumulativo
        var cumulativeWeight = 0.0
        
        // Itera pelos programas e calcula o peso cumulativo
        for (index, program) in programs.enumerated() {
            cumulativeWeight += program.weight
            // Loga cada programa detalhadamente
            //logDetails += "Program(index: \(index), id: \(program.id), weight: \(program.weight), numSeccov: \(program.numSeccov), size: \(program.size), isEmpty: \(program.isEmpty))\n"
            //logDetails += "[JST] Program index: \(index), Program weight: \(program.weight), Cumulative weight: \(cumulativeWeight)\n"

            // Verifica se o número aleatório é menor que o peso cumulativo
            if randomNumber < cumulativeWeight {
                // Incrementa a idade apenas se o peso não for 200.0
                if program.weight == 1.0 {
                    ages[index] += 1
                    //logDetails += "[JST] Incrementing age for program at index \(index). New age: \(ages[index])\n"
                }
                //logDetails += "[JST] Choosing program with weight \(program.weight) for splicing at index \(index)\n"

                //writeLogToFile(logDetails: logDetails, fileName: "splicing.log")
                return program
            }
        }

        // Se nenhum programa for selecionado, lança um erro fatal
        //let errorLog = "[JST] Failed to select a program based on weights for splicing.\n"
        //logDetails += errorLog
        //writeLogToFile(logDetails: logDetails, fileName: "splicing.log")
        fatalError("[JST] no program to be selected")
    }





    func writeLogToFile(logDetails: String, fileName: String) {
        let fileManager = FileManager.default
        let fileURL = fileManager.homeDirectoryForCurrentUser.appendingPathComponent(fileName)

        // Verifica se o arquivo já existe, se não, cria-o
        if !fileManager.fileExists(atPath: fileURL.path) {
            fileManager.createFile(atPath: fileURL.path, contents: nil, attributes: nil)
        }

        do {
            let fileHandle = try FileHandle(forWritingTo: fileURL)
            fileHandle.seekToEndOfFile()
            if let data = logDetails.data(using: .utf8) {
                fileHandle.write(data)
            }
            fileHandle.closeFile()
        } catch {
            print("Failed to write to file: \(error)")
        }
}

    
    
    public func allPrograms() -> [Program] {
        return Array(programs)
    }

    public func exportState() throws -> Data {
        let res = try encodeProtobufCorpus(programs)
        logger.info("Successfully serialized \(programs.count) programs")
        return res
    }

    public func importState(_ buffer: Data) throws {
        let newPrograms = try decodeProtobufCorpus(buffer)
        programs.removeAll()
        ages.removeAll()
        newPrograms.forEach(addInternal)
    }

    private func cleanup() {
        assert(!fuzzer.config.staticCorpus)
        var newPrograms = RingBuffer<Program>(maxSize: programs.maxSize)
        var newAges = RingBuffer<Int>(maxSize: ages.maxSize)

        for i in 0..<programs.count {
            let remaining = programs.count - i
            if ages[i] < minMutationsPerSample || remaining <= (minSize - newPrograms.count) {
                newPrograms.append(programs[i])
                newAges.append(ages[i])
            }
        }

        logger.info("Corpus cleanup finished: \(self.programs.count) -> \(newPrograms.count)")
        programs = newPrograms
        ages = newAges
    }

    public var startIndex: Int {
        return programs.startIndex
    }

    public var endIndex: Int {
        return programs.endIndex
    }

    public subscript(index: Int) -> Program {
        return programs[index]
    }

    public func index(after i: Int) -> Int {
        return i + 1
    }
}
