import { asmDocs } from "./asmDocs";

type Keyword = {
  name: string;
  description: string;
  allowLength?: boolean;
  docs: string;
}

const asm: { syntax: Keyword[]; opcodes: Keyword[] } = {
  syntax: [
    {
      name: "arch",
      description: `Architecture  [65816=default,spc700,spc700-inline,superfx]`,
      docs: ""
    },
    {
      name: "defaultslot",
      description: "",
      docs: ""
    },
    {
      name: "slotsize",
      description: "",
      docs: ""
    },
    {
      name: "slot",
      description: "",
      docs: ""
    },
    {
      name: "id",
      description: "",
      docs: ""
    },
    {
      name: "name",
      description: "",
      docs: ""
    },
    {
      name: "slowrom",
      description: "",
      docs: ""
    },
    {
      name: "lorom",
      description: "",
      docs: ""
    },
    {
      name: "hirom",
      description: "",
      docs: ""
    },
    {
      name: "cartridgetype",
      description: "",
      docs: ""
    },
    {
      name: "romsize",
      description: "",
      docs: ""
    },
    {
      name: "sramsize",
      description: "",
      docs: ""
    },
    {
      name: "country",
      description: "",
      docs: ""
    },
    {
      name: "licenseecode",
      description: "",
      docs: ""
    },
    {
      name: "version",
      description: "",
      docs: ""
    },
    {
      name: "cop",
      description: "",
      docs: ""
    },
    {
      name: "brk",
      description: "",
      docs: ""
    },
    {
      name: "abort",
      description: "",
      docs: ""
    },
    {
      name: "nmi",
      description: "",
      docs: ""
    },
    {
      name: "irq",
      description: "",
      docs: ""
    },
    {
      name: "reset",
      description: "",
      docs: ""
    },
    {
      name: "irqbrk",
      description: "",
      docs: ""
    },
    {
      name: "semifree",
      description: "",
      docs: ""
    },
    {
      name: "header_off",
      description: "",
      docs: ""
    },
    {
      name: "force",
      description: "",
      docs: ""
    },
  ],
  opcodes: [
    {
      name: "ADC",
      description: "Add with Carry",
      allowLength: true,
      docs: asmDocs["ADC SBC"]
    },
    {
      name: "AND",
      description: "AND Accumulator",
      allowLength: true,
      docs: asmDocs["AND EOR ORA"]
    },
    {
      name: "ASL",
      description: "Accumulator Shift Left",
      docs: asmDocs["ASL LSR ROL ROR"]
    },
    {
      name: "BCC",
      description: "Branch if Carry Clear",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BCS",
      description: "Branch if Carry Set",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BEQ",
      description: "Branch if Equal",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BIT",
      description: "Bit Test",
      allowLength: true,
      docs: asmDocs.BIT
    },
    {
      name: "BMI",
      description: "Branch if Minus",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BNE",
      description: "Branch if Not Equal",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BPL",
      description: "Branch if Plus",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BRA",
      description: "Branch Always",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BRK",
      description: "Software Break",
      docs: asmDocs["BRK COP"]
    },
    {
      name: "BRL",
      description: "Branch Always Long",
      docs: asmDocs.BRL
    },
    {
      name: "BVC",
      description: "Branch if Overflow Clear",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "BVS",
      description: "Branch if Overflow Set",
      docs: asmDocs["BCC BCS BEQ BMI BNE BPL BRA BVC BVS"]
    },
    {
      name: "CLC",
      description: "Clear Carry flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "CLD",
      description: "Clear Decimal flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "CLI",
      description: "Clear Interrupt flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "CLV",
      description: "Clear Overflow flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "CMP",
      description: "Compare Accumulator",
      allowLength: true,
      docs: asmDocs["CMP CPX CPY"]
    },
    {
      name: "COP",
      description: "Coprocesssor Empowerment",
      docs: asmDocs["BRK COP"]
    },
    {
      name: "CPX",
      description: "Compare X",
      allowLength: true,
      docs: asmDocs["CMP CPX CPY"]
    },
    {
      name: "CPY",
      description: "Compare Y",
      allowLength: true,
      docs: asmDocs["CMP CPX CPY"]
    },
    {
      name: "DEC",
      description: "Decrease Accumulator",
      allowLength: true,
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "DEX",
      description: "Decrease X",
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "DEY",
      description: "Decrease Y",
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "EOR",
      description: "Exclusive OR Accumulator",
      docs: asmDocs["AND EOR ORA"]
    },
    {
      name: "INC",
      description: "Increase Accumulator",
      allowLength: true,
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "INX",
      description: "Increase X",
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "INY",
      description: "Increase Y",
      docs: asmDocs["DEC DEX DEY INC INX INY"]
    },
    {
      name: "JML",
      description: "Jump Long",
      docs: asmDocs["JMP JSL JSR"]
    },
    {
      name: "JMP",
      description: "Jump",
      allowLength: true,
      docs: asmDocs["JMP JSL JSR"]
    },
    {
      name: "JSL",
      description: "Jump to Subroutine Long",
      docs: asmDocs["JMP JSL JSR"]
    },
    {
      name: "JSR",
      description: "Jump to Subroutine",
      allowLength: true,
      docs: asmDocs["JMP JSL JSR"]
    },
    {
      name: "LDA",
      description: "Load Accumulator",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "LDX",
      description: "Load X",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "LDY",
      description: "Load Y",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "LSR",
      description: "Logical Shift Right",
      allowLength: true,
      docs: asmDocs["ASL LSR ROL ROR"]
    },
    {
      name: "MVN",
      description: "Move Negative",
      docs: asmDocs["MVN MVP"]
    },
    {
      name: "MVP",
      description: "Move Positive",
      docs: asmDocs["MVN MVP"]
    },
    {
      name: "NOP",
      description: "No Operation",
      docs: asmDocs["NOP WDM"]
    },
    {
      name: "ORA",
      description: "OR Accumulator",
      allowLength: true,
      docs: asmDocs["AND EOR ORA"]
    },
    {
      name: "PEA",
      description: "Push Effective Address",
      allowLength: true,
      docs: asmDocs["PEA PEI PER"]
    },
    {
      name: "PEI",
      description: "Push Effective Indirect address",
      docs: asmDocs["PEA PEI PER"]
    },
    {
      name: "PER",
      description: "Push program counter Relative",
      docs: asmDocs["PEA PEI PER"]
    },
    {
      name: "PHA",
      description: "Push Accumulator",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "PHB",
      description: "Push Bank",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PHD",
      description: "Push Direct page",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PHK",
      description: "Push program bank",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PHP",
      description: "Push Processor status flags",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PHX",
      description: "Push X",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "PHY",
      description: "Push Y",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "PLA",
      description: "Pull Accumulator",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "PLB",
      description: "Pull Bank",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PLD",
      description: "Pull Direct page",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PLP",
      description: "Pull Processor status flags",
      docs: asmDocs["PHB PHD PHK PHP PLB PLD PLP"]
    },
    {
      name: "PLX",
      description: "Pull X",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "PLY",
      description: "Pull Y",
      docs: asmDocs["PHA PHX PHY PLA PLX PLY"]
    },
    {
      name: "REP",
      description: "Reset Processor status",
      docs: asmDocs["REP SEP"]
    },
    {
      name: "ROL",
      description: "Rotate Left",
      allowLength: true,
      docs: asmDocs["ASL LSR ROL ROR"]
    },
    {
      name: "ROR",
      description: "Rotate Right",
      allowLength: true,
      docs: asmDocs["ASL LSR ROL ROR"]
    },
    {
      name: "RTI",
      description: "Return from Interrupt",
      docs: asmDocs.RTI
    },
    {
      name: "RTL",
      description: "Return from subroutine Long",
      docs: asmDocs["RTL RTS"]
    },
    {
      name: "RTS",
      description: "Return from Subroutine",
      docs: asmDocs["RTL RTS"]
    },
    {
      name: "SBC",
      description: "Subtract with Carry",
      allowLength: true,
      docs: asmDocs["ADC SBC"]
    },
    {
      name: "SEC",
      description: "Set Carry flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "SED",
      description: "Set Decimal flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "SEI",
      description: "Set Interrupt flag",
      docs: asmDocs["CLC CLD CLI CLV SEC SED SEI"]
    },
    {
      name: "SEP",
      description: "Set Processor status",
      docs: asmDocs["REP SEP"]
    },
    {
      name: "STA",
      description: "Store Accumulator",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "STP",
      description: "Stop the clock",
      docs: asmDocs["STP WAI"]
    },
    {
      name: "STX",
      description: "Store X",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "STY",
      description: "Store Y",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "STZ",
      description: "Store Zero",
      allowLength: true,
      docs: asmDocs["LDA LDX LDY STA STX STY STZ"]
    },
    {
      name: "TAX",
      description: "Transfer Accumulator to X",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TAY",
      description: "Transfer Accumulator to Y",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TCD",
      description: "Transfer Accumulator to Direct page",
      docs: asmDocs["TCD TCS TDC TSC"]
    },
    {
      name: "TCS",
      description: "Transfer Accumulator to Stack pointer",
      docs: asmDocs["TCD TCS TDC TSC"]
    },
    {
      name: "TDC",
      description: "Transfer Direct page to Accumulator",
      docs: asmDocs["TCD TCS TDC TSC"]
    },
    {
      name: "TRB",
      description: "Test and Reset Bit",
      docs: asmDocs["TRB TSB"]
    },
    {
      name: "TSB",
      description: "Test and Set Bit",
      docs: asmDocs["TRB TSB"]
    },
    {
      name: "TSC",
      description: "Transfer Stack pointer to Accumulator",
      docs: asmDocs["TCD TCS TDC TSC"]
    },
    {
      name: "TSX",
      description: "Transfer Stack pointer to X",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TXA",
      description: "Transfer X to Accumulator",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TXS",
      description: "Transfer X to Stack pointer",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TXY",
      description: "Transfer X to Y",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TYA",
      description: "Transfer Y to Accumulator",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "TYX",
      description: "Transfer Y to X",
      docs: asmDocs["TAX TAY TSX TXA TXS TXY TYA TYX"]
    },
    {
      name: "WAI",
      description: "Wait for Interrupt",
      docs: asmDocs["STP WAI"]
    },
    {
      name: "WDM",
      description: "William David Mensch",
      docs: asmDocs["NOP WDM"]
    },
    {
      name: "XBA",
      description: "Exchange B and A",
      docs: asmDocs.XBA
    },
    {
      name: "XCE",
      description: "Exchange Carry and Emulation bit",
      docs: asmDocs.XCE
    },
  ],
};

export default asm;
