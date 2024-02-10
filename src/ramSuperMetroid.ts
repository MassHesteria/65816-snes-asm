import { RamAddress } from "./ram";
export const ramSuperMetroid: RamAddress[] = [
{ address: 0x7e09a2, length: 2,
  data: `Equipped Items  

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
{ address: 0x7e09a4, length: 2,
  data: `Collected Items  

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
{ address: 0x7e09a6, length: 2,
  data: `Equipped Beams  

1: Wave  
2: Ice  
4: Spazer  
8: Plasma  
1000h: Charge`
},
{ address: 0x7e09a8, length: 2,
  data: `Collected Beams  

1: Wave  
2: Ice  
4: Spazer  
8: Plasma  
1000h: Charge`
},
{ address: 0x7e09c0, length: 2,
  data: `Reserve health mode  

0: Not obtained  
1: Auto  
2: Manual`
},
{ address: 0x7e09c2, length: 2,
  data: `Samus health`
},
{ address: 0x7e09c4, length: 2,
  data: `Samus max health`
},
{ address: 0x7e09c6, length: 2,
  data: `Samus missiles`
},
{ address: 0x7e09c8, length: 2,
  data: `Samus max missiles`
},
{ address: 0x7e09ca, length: 2,
  data: `Samus super missiles`
},
{ address: 0x7e09cc, length: 2,
  data: `Samus max super missiles`
},
{ address: 0x7e09ce, length: 2,
  data: `Samus power bombs`
},
{ address: 0x7e09d0, length: 2,
  data: `Samus max power bombs`
},
{ address: 0x7e09d2, length: 2,
  data: `HUD item index  
    
0: Nothing  
1: Missiles  
2: Super missiles  
3: Power bombs  
4: Grapple beam  
5: X-ray`
},
{ address: 0x7e09d4, length: 2,
  data: `Samus max reserve health`
},
{ address: 0x7e09d6, length: 2,
  data: `Samus reserve health`
},
{ address: 0x7e09d8, length: 2,
  data: `Samus reserve missiles. Only used by missile pickup routine(91DF80)`
},
{ address: 0x7e09da, length: 2,
  data: `Game time, frames`
},
{ address: 0x7e09dc, length: 2,
  data: `Game time, seconds`
},
{ address: 0x7e09de, length: 2,
  data: `Game time, minutes`
},
{ address: 0x7e09e0, length: 2,
  data: `Game time, hours (capped at 99:59:59.59)`
},
]
