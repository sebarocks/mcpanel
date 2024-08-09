export class MCTime {
    hour: number = 0;
    minute: number = 0;
    daylight: boolean = false;
    tick: number = 0;

    constructor(hour: number, minute: number) {
        this.hour = hour;
        this.minute = minute;

        this.tick = ((hour - 6) % 24) * 1000 + (minute * 6) / 100;
        this.daylight = this.tick < 13700;
    }

    reCalculateTick() {
        this.tick = ((this.hour - 6) % 24) * 1000 + (this.minute * 6) / 100;
        this.daylight = this.tick < 13700;
    }

    update(tick : number) {
        this.daylight = tick < 13700;
        this.hour = Math.floor( ((tick / 1000) + 6) % 24 );
        this.minute = Math.floor( ((tick % 1000) * 6) / 100 );
        this.tick = tick;
    }

    addMinute(): void {
        if(this.minute >= 59){
            this.minute = 0;
            if(this.hour >= 23){
                this.hour = 0;
            } else{
                this.hour = this.hour + 1;
            }
        } else{
            this.minute = this.minute + 1;
        }
        this.reCalculateTick();
    }

}

export function parseTime(servertime: string): MCTime {
    const mcdt = new MCTime(0, 0);
    const time = parseInt(servertime);

    mcdt.daylight = time >= 0 && time < 13700;
    mcdt.hour = ((time / 1000) + 6) % 24;
    mcdt.minute = ((time % 1000) * 6) / 100;
    mcdt.tick = time;

    return mcdt;
}
