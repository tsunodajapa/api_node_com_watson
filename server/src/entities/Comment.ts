import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

}