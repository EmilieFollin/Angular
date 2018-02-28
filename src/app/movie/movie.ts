export class Movie {
    id : number;
    title: string;
    releaseDates: Date;
    syno: string;
    note: number;

    constructor(id,title,releaseDates,syno,note){
        this.id = id;
        this.title = title;
        this.releaseDates = releaseDates;
        this.syno = syno;
        this.note = note;
    }
}
