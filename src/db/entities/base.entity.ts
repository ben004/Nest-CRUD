import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class Base {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'boolean', default: true, name: 'is_active' })
	isActive: boolean;

	@Column({ default: false, name: 'is_deleted' })
	isDeleted: boolean;

	@CreateDateColumn({
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP',
		name: 'created_at',
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: 'timestamptz',
		default: () => 'CURRENT_TIMESTAMP',
		name: 'updated_at',
	})
	updatedAt: Date;
}
