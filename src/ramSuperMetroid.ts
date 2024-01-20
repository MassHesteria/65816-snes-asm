import { RamAddress } from "./ram";

export const ramSuperMetroid: RamAddress[] = [
    {
        address: 0x7E09A2, length: 2,
        description: "Equipped Items",
        notes: `
1: Varia suit  
2: Spring ball  
4: Morph ball  
8: Screw attack  
20h: Gravity suit  
100h: Hi-jump boots  
200h: Space jump  
1000h: Bombs  
2000h: Speed booster  
4000h: Grapple  
8000h: X-Ray`
    },
    {
        address: 0x7E09A4, length: 2,
        description: "Collected Items",
        notes: `
1: Varia suit
2: Spring ball
4: Morph ball
8: Screw attack
20h: Gravity suit
100h: Hi-jump boots
200h: Space jump
1000h: Bombs
2000h: Speed booster
4000h: Grapple
8000h: X-Ray`
    },
]