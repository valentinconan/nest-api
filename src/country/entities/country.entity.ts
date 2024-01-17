import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;
}
