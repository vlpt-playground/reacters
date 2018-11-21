import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import User from './User';

@Table({
  tableName: 'posts',
  indexes: [
    {
      fields: ['user_id']
    }
  ]
})
class Post extends Model<Post> {
  @Column
  title!: string;

  @Column(DataType.TEXT)
  body!: string;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

export default Post;
