export class UserModel {
    name: string;
    profession: string;
    sect: string;
    id:number
    constructor(profession: string, name: string,sect: string,id: number) {
        this.profession = profession;
        this.name = name;
        this.sect = sect;
        this.id = id;
    }

}