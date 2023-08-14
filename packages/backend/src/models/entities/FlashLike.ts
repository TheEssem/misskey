/*
 * SPDX-FileCopyrightText: syuilo and other misskey contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { PrimaryColumn, Entity, Index, JoinColumn, Column, ManyToOne } from 'typeorm';
import { id } from '../id.js';
import { MiUser } from './User.js';
import { MiFlash } from './Flash.js';

@Entity()
@Index(['userId', 'flashId'], { unique: true })
export class MiFlashLike {
	@PrimaryColumn(id())
	public id: string;

	@Column('timestamp with time zone')
	public createdAt: Date;

	@Index()
	@Column(id())
	public userId: MiUser['id'];

	@ManyToOne(type => MiUser, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public user: MiUser | null;

	@Column(id())
	public flashId: MiFlash['id'];

	@ManyToOne(type => MiFlash, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	public flash: MiFlash | null;
}
