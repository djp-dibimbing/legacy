import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('table_user')
    export class User{
        @PrimaryGeneratedColumn()
        user_id: number;

        @Column({ unique : true})
        username: string;

        @Column()
        password: string;

        @Column()
        email: string;

        @Column()
        npwp: number;

        @Column()
        nik: number;

        @Column()
        alamat: string;

        @Column()
        created_date: Date;

}