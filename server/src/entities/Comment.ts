import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

import { Expose } from 'class-transformer';

@Entity('comments')
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

    @Column("varchar")
    filename: string;

    @Expose({ name: 'audio_url' })
    getAudioUrl(): string {
        return `${process.env.APP_API_URL}/uploads/${this.filename}`;
    }
}