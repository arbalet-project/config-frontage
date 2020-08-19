export enum ColorMode {
  RGB,
  GRB
}

export interface FormResponse {
  address: number;
  step: number;
  mode: string;
}

export class Universe {
  public color: ColorMode;
  private numberColor = 3;
  private sidesTicket = new Map<string, number>();

  public constructor(public id, private address, private gap: number) { }

  public registerSide(key: string): void {
    if (!this.sidesTicket.has(key)) {
      this.sidesTicket.set(key, this.address);
    } else {
      console.error('This side is register yet !');
    }
  }

  public getNewAddress(key: string): number {
    if (this.sidesTicket.has(key)) {
      const a = this.sidesTicket.get(key);
      this.sidesTicket.set(key, a + this.numberColor + this.gap);
      return a;
    } else {
      console.error('This side is not register yet !');
      return -1;
    }
  }
}

