import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Filing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    npwp: string;

    @Column()
    tahun_pajak: number;

    @Column()
    pembetulan: number;

    @Column()
    ph_usaha: number;

    @Column()
    ph_pekerjaan: number;

    @Column()
    ph_lain: number;

    @Column()
    zakat: number;

    @Column()
    ph_neto: number;

    @Column()
    ptkp: number;

    @Column()
    pkp: number;

    @Column()
    pph_terutang: number;

    @Column()
    pph_dipotong: number;

    @Column()
    pph_bayar: number;

    @Column()
    kredit_pajak: number;

    @Column()
    kb_lb: number;

    @Column()
    lampiran: string;
}